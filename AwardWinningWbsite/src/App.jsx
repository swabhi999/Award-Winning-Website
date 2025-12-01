import { useState } from "react";
import "./App.css";
import About from "./component/About"
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Features from "./component/Features";
import Story from "./component/Story";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <main className="relative m-h-screen w-screen overflow-x-hidden ">
        <NavBar/>
        <Hero />
        <About/>
        <Features/>
        <Story/>
        <Contact/>
        </main>
    </>
  );
}

export default App;
