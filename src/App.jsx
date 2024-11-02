import React from "react";
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Navbar />
      <div className='max-w-[1300px] mx-auto relative p-0 md:p-0 lg:px-[1.5rem]'>
        <Element name="hero"><Hero /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="education"><Education /></Element>
        <Element name="contact"><ContactMe /></Element>
      </div>
    </>
  );
}

export default App;

