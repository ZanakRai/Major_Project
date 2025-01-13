import React from 'react';
import { ImDatabase } from "react-icons/im";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-20 pt-32" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-white mb-8">About Me</h2>

        {/* Intro text */}
        <p className="text-lg sm:text-xl mb-10 text-gray-400 max-w-3xl mx-auto">
          Hi, I'm Chomhang Limbu, a passionate Full Stack Developer specializing in the MERN stack.
          I love building dynamic, responsive, and scalable web applications that make an impact.
          Let's build something amazing together!
        </p>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 perspective">
          {/* Skill 1 - MongoDB */}
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:bg-blue-500 hover:shadow-xl"
          >
            <ImDatabase className="w-16 h-16 mb-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-teal-500 mb-2 group-hover:text-yellow-500 transition-colors duration-300">MongoDB</h3>
            <p className="text-center text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">NoSQL Database for building scalable and flexible apps.</p>
          </a>

          {/* Skill 2 - Express.js */}
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:bg-blue-500 hover:shadow-xl"
          >
            <SiExpress className="w-16 h-16 mb-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-teal-500 mb-2 group-hover:text-yellow-500 transition-colors duration-300">Express.js</h3>
            <p className="text-center text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">Fast and minimal web framework for building APIs.</p>
          </a>

          {/* Skill 3 - React.js */}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:bg-blue-500 hover:shadow-xl"
          >
            <img
              src="https://img.icons8.com/ios/452/react-native.png"
              alt="React.js"
              className="w-16 h-16 mb-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
            />
            <h3 className="text-xl font-semibold text-teal-500 mb-2 group-hover:text-yellow-500 transition-colors duration-300">React.js</h3>
            <p className="text-center text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">Build interactive UIs with component-based architecture.</p>
          </a>

          {/* Skill 4 - Node.js */}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-out hover:scale-105 hover:bg-blue-500 hover:shadow-xl"
          >
            <FaNode className="w-16 h-16 mb-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-teal-500 mb-2 group-hover:text-yellow-500 transition-colors duration-300">Node.js</h3>
            <p className="text-center text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">JavaScript runtime for building fast and scalable server-side applications.</p>
          </a>
        </div>

        {/* More info */}
        <p className="text-lg sm:text-xl mt-10 text-gray-400 max-w-3xl mx-auto">
          I am always exploring new technologies and improving my skills. My goal is to create web applications that are not only functional but also intuitive and visually appealing. Let's collaborate to turn your ideas into reality!
        </p>
      </div>
    </section>
  );
};

export default About;
