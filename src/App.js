import React, { useEffect } from "react";
import styles from "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Exp from "./Exp";
import Work from "./Work";
import Contact from "./Contact";
import ParticlesComponent from './particles';
import "@fontsource/poppins";
import Conbar from "./Conbar";
import ViewCounter from "./ViewCounter";

function App() {
  useEffect(() => {//custom cursor
    const cursor = document.getElementById("custom-cursor"); // grab dom element with ref to id="custom-cursor" whch is a styled div
    const move = (e) => { // move is function that runs whenever you move ur mouse
      cursor.style.left = e.clientX + "px"; // mouse's x and y position on the screen
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move); // event listener - everytime the mousemoves, clal the move function
    return () => window.removeEventListener("mousemove", move); // cleanup, when component unmounts it removes the event listener so it isn't running in the background
  }, []);

  return (
    <div className={styles.App}>
      <div className="custom-cursor" id="custom-cursor"></div>
      <ParticlesComponent id="particles" />
      <NavBar />
      <Conbar />
      <div className={styles.content}>
        <Hero />
        <About />
        <Exp />
        <Work />
        <Contact />
      </div>
      <ViewCounter />
    </div>
  );
}

export default App;
