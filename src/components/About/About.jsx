import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../../assets/name-logo-white.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-[linear-gradient(to_right,rgb(66,180,205),white)] bg-clip-text text-transparent mb-4 leading-tight ">
            Ambika Sahu
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#0677e0] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Front-end Developer",
                "Web-Developer",
                "UX/UI Developer!",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorRenderer={(cursor) => (
                <span className="text-[#0659c5]">{cursor}</span>
              )}
            />{" "}
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a frontend developer skilled in building scalable web
            applications. Along with expertise in frontend development, I
            specialize in the MERN stack and other modern technologies to
            deliver seamless user experiences and efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1OKgzuu8BRIekYxF_u4sT8pf9KskQysMV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: " linear-gradient(824deg, #08d3f7, #004aad)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end h-64 w-64  items-start">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem]  "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profilePic}
              alt="Ambika Sahu"
              className=" md:w-64 h-64 w-full object-top drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
