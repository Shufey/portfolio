import React from "react";
import "./projects.css";
import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"
import projectThree from "../assets/project-3.png"

const Projects = () => {
  return (
    <div className="text-white w-full project-container md:h-screen ">
      <h5 className="text-2xl font-semibold mb-14 md:ml-0 ml-8">Projects</h5>
      <div className=" flex md:flex-row flex-col-reverse justify-center w-full items-center mb-12">
        <div className="flex flex-col gap-4 justify-center items-start md:m-0 md:p-0 p-4 m-8">
          <h3 className="text-3xl font-semibold">Jot-Box</h3>
          <p className="text-xl font-normal py-4">
            Jot-Box is a sleek note-saving app built with React, Tailwind CSS,
            and React Redux. <br />
            It uses the Local Storage API to securely save your notes in your
            browser, making it easy to organize your thoughts and access them 
            instantly whenever you need.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/Shufey/JotBox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
                Source Code
              </button>
            </a>

            <a
              href="https://jot-box.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
                Live Demo
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full md:w-[50%]">
          <img
            src={projectOne}
            alt="project-1"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center w-full items-center mb-12">
        <div className=" w-full md:w-[50%]">
          <img
            src={projectTwo}
            alt="project-2"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-start md:m-0 md:p-0 p-4 m-8">
          <h3 className="text-3xl font-semibold">Yumify</h3>
          <p className="text-xl font-normal py-4">
            Yumify is a responsive online food delivery app crafted with React,
            Tailwind CSS and Redux Toolkit. <br />
            It offers a seamless user experience with features like search,
            add-to-cart and category based filtering, making it easy to explore
            and order your favorite dishes on ay devices.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/Shufey/Yumify-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
                Source Code
              </button>
            </a>

            <a
              href="https://yumify-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse justify-center w-full items-center mb-12">
        <div className="flex flex-col gap-4 justify-center items-start md:m-0 md:p-0 p-4 m-8">
          <h3 className="text-3xl font-semibold">Mega-Blog</h3>
          <p className="text-xl font-normal py-4">
            Mega-Blog is a full-stack blogging platform developed with React and
            powered by Appwrite as the backend. <br />
            With TinyMCE API integration for rich text editing, it allows users
            to create, publish and manage their blogs effortlessly.
            <br />
            Complete with full CRUD functionality, Mega-Blog lets user share
            their content online and explore blogs written by others in a
            smooth, interactive experience.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/Shufey/Mega-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
                Source Code
              </button>
            </a>

            <a
              href="https://mega-blog-black.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm py-[0.6rem] px-[2rem] text-center">
                Live Demo
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full md:w-[50%]">
          <img
            src={projectThree}
            alt="project-3"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
