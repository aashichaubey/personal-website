import crypto from "node:crypto";

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const HASH_SALT = process.env.VIEWER_HASH_SALT || "default-salt";
const OWNER_IPS = new Set(
  (process.env.OWNER_IPS || "")
    .split(",")
    .map((ip) => ip.trim())
    .filter(Boolean),
);

function json(res, statusCode, body) {
  res.status(statusCode).setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(body));
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.length > 0) {
    return realIp.trim();
  }

  return "unknown";
}

function hashVisitor(ip, userAgent) {
  return crypto
    .createHash("sha256")
    .update(`${HASH_SALT}:${ip}:${userAgent}`)
    .digest("hex");
}

async function runRedis(command) {
  const response = await fetch(`${REDIS_URL}/${command.join("/")}`, {
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Redis command failed: ${command[0]}`);
  }

  const data = await response.json();
  return data.result;
}

async function getCounts() {
  const [totalViews, uniqueViews] = await Promise.all([
    runRedis(["get", "views:total"]),
    runRedis(["scard", "views:unique"]),
  ]);

  return {
    totalViews: Number(totalViews || 0),
    uniqueViews: Number(uniqueViews || 0),
  };
}

export default async function handler(req, res) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return json(res, 500, { error: "Missing Redis environment variables." });
  }

  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return json(res, 405, { error: "Method not allowed." });
  }

  try {
    const clientIp = getClientIp(req);
    const userAgent = String(req.headers["user-agent"] || "unknown");
    const visitorHash = hashVisitor(clientIp, userAgent);

    const ownerByIp = OWNER_IPS.has(clientIp);
    const ownerByHeader = req.headers["x-viewer-exclude"] === "1";
    const shouldExclude = ownerByIp || ownerByHeader;

    if (req.method === "POST" && !shouldExclude) {
      await Promise.all([
        runRedis(["incr", "views:total"]),
        runRedis(["sadd", "views:unique", visitorHash]),
      ]);
    }

    const counts = await getCounts();
    return json(res, 200, {
      ...counts,
      counted: req.method === "POST" && !shouldExclude,
      excluded: shouldExclude,
    });
  } catch (error) {
    return json(res, 500, { error: "Failed to fetch view stats." });
  }
}
