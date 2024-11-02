import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-lvh w-full overflow-y-hidden bg-[rgba(0,0,0,0.3)] z-[999] shadow-[0px_29px_80px_rgba(0,0,0,0.3)] transition-transform duration-300 transform ${
        isOpen ? "translate-x-0 opacity-100 md:hidden" : "translate-x-full opacity-0 md:hidden"
      }`}
      onClick={toggleMenu}
    >
      <div className="h-full bg-[#342864] p-8 flex justify-start flex-col">
        <button 
          className="text-white self-end p-1 text-xl" 
          onClick={toggleMenu} 
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <ul className="flex flex-col gap-8 list-none ml-[-2rem] pt-12">
          <li className="text-center text-2xl text-white font-semibold">
            <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="text-center text-2xl text-white font-semibold">
            <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li className="text-center text-2xl text-white font-semibold">
            <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="text-center text-2xl text-white font-semibold">
            <Link to="education" smooth={true} duration={500} onClick={toggleMenu}>
              Education
            </Link>
          </li>
          <li className="text-center text-2xl text-white font-semibold">
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact Me
            </Link>
          </li>
          <button className="text-purple-700 bg-white hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none font-semibold rounded-lg text-2xl py-[0.6rem] px-[2rem] text-center ml-8">
            Hire Me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
