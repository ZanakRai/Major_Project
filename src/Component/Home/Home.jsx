import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/images/profile.png'; // Import the image

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const textElement = document.getElementById("floatingText");
    textElement.classList.add("floating");
    setTimeout(() => {
      textElement.classList.remove("opacity-0");
      textElement.classList.add("opacity-100");
    }, 1000); // After 1 second (for animation)
  }, []);

  return (
    <section className="w-full bg-gray-900 text-white py-20 pt-32 sm:pt-36 md:pt-40 relative h-full pb-60" id="home">
      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-16">
        {/* Circular Image above the name */}
        <img
          src={profileImage} // Use the imported image
          alt="Image"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-teal-500 cursor-pointer"
          onClick={openModal} // Open modal when the image is clicked
        />
        <h1
          id="floatingText"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 opacity-0 transition-opacity duration-1000"
        >
          Hello, I'm Chomhang Limbu
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
          I'm a passionate web developer creating amazing web experiences. Let's build something great together!
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-teal-500 text-white text-xl rounded-full shadow-lg hover:bg-teal-400 transition duration-300 transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>

      {/* Smooth Scroll Effect for CTA */}
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-teal-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm.5 3h-1v4.707L6.146 7.854l-.708.708L8 10.207l2.854-2.854-.708-.708L8.5 8.707V4z"/>
        </svg>
      </a>

      {/* Modal for the profile image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-sm">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-teal-500 hover:bg-teal-400 text-xl font-bold rounded-full w-8 h-8 flex justify-center items-center"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              ×
            </button>
            {/* Profile Image in Modal */}
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
