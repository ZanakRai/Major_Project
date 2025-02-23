import React from "react";
import {Link as RouterLink} from "react-router-dom";

const Home = () => {
  const images = [
    "./images/image_8.png",
    "./images/image_2.png",
    "./images/image_3.png",
    "./images/image_4.png",
    "./images/image_5.png",
    "./images/image_6.png",
    "./images/image_7.png",
  ];
  const radius = 300;

  return (
    <section className="relative h-screen w-full flex flex-wrap overflow-hidden text-white bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700" id="home">
  <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-full px-6 sm:px-12 md:px-16 lg:px-24 text-center space-y-4 z-10">
    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-shadow-lg">Agro MATCH...</h1>
    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-shadow-md">
      Discover the best crop matches for your environment according to the parameters you have.
    </p>
  </div>

  <div
    className="relative animate-circularRotate"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px",
      position: "absolute",
      top: "40%", // Reduced top value to bring the images higher
      left: "66%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {images.map((src, index) => (
      <div
        key={index}
        className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110"
        style={{
          transform: `rotateY(${(360 / images.length) * index}deg) translateZ(${radius}px)`,
        }}
      >
        <img src={src} alt={`Slide ${index + 1}`} className="h-full w-full object-cover rounded-lg shadow-lg" />
      </div>
    ))}
  </div>

  <RouterLink
  to='/content'
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40">
    <button className="px-6 py-3 text-sm sm:text-base md:text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md hover:scale-105 transition-all duration-300 z-50">
      Let's start →
    </button>
  </RouterLink>
</section>

  );
};

export default Home;
