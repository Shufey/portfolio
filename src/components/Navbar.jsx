import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="bg-[rgba(0,0,0,0.8)] py-2 px-0 sticky top-0 z-30 backdrop-blur-50">
        <div className="max-w-[1300px] flex items-center justify-end py-4 px-0 my-0 mx-auto ">

          <ul className="hidden md:flex items-center gap-2 list-none">
            <li className="my-0 mx-6">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-sm font-medium text-[#fff] relative cursor-pointer hover:before:w-[100%]"
              >
                Home
              </Link>
            </li>
            <li className="my-0 mx-6">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-sm font-medium text-[#fff] relative cursor-pointer hover:before:w-[100%]"
              >
                Skills
              </Link>
            </li>
            <li className="my-0 mx-6">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-sm font-medium text-[#fff] relative cursor-pointer hover:before:w-[100%]"
              >
                Projects
              </Link>
            </li>
            <li className="my-0 mx-6">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="text-sm font-medium text-[#fff] relative cursor-pointer hover:before:w-[100%]"
              >
                Education
              </Link>
            </li>
            <li className="my-0 mx-6">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-sm font-medium text-[#fff] relative cursor-pointer hover:before:w-[100%]"
              >
                Contact Me
              </Link>
            </li>
            <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
              Hire Me
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-lg text-sm py-[0.6rem] px-[1.5rem] text-center mr-8"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
