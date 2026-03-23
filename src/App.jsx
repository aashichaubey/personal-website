import SplashCursor from "./components/SplashCursor";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="page">
      <div className="page-inner">
        <NavBar />
        <div className="content">
          <Intro />
          <Projects />
          <Experience />
          <Footer />
        </div>
        <SplashCursor />
      </div>
    </div>
  );
}

export default App;
