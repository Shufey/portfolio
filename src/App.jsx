import React from "react";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <div className="overflow-hidden px-8">
          <Element name="hero">
            <Hero />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="education">
            <Education />
          </Element>
          <Element name="contact">
            <ContactMe />
          </Element>
        </div>
      </div>
    </>
  );
}

export default App;
