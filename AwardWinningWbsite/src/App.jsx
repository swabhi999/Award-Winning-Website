import { useState } from "react";
import "./App.css";
import About from "./component/About"
import Hero from "./component/Hero";

function App() {
  return (
    <>
      <main className="relative m-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About/>
        </main>
    </>
  );
}

export default App;
