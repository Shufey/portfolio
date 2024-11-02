import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="text-white mb-8">
      <section className=" w-[100%] h-screen hero-container flex justify-center items-center relative flex-col-reverse md:flex-row">
        <div className=" w-[90%] md:w-[50%] flex flex-col justify-center md:pl-0 pl-10">
          <h1 className="font-semibold text-6xl mb-8">
            Hi! I'm <span className="font-bold text-8xl ">Shafi</span>.
          </h1>
          <h2 className="font-semibold text-4xl mb-6">
            Building Digital Experiences That Inspire
          </h2>
          <p className="w-[80%] text-2xl font-normal">
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
        </div>

        <div className=" w-full md:w-[50%] hero-img flex justify-center">
          <div className="w-[70%] rounded-full overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src="./src/assets/shafi-photo.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
