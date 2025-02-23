import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  // Handle menu toggle and navigation
  const handleMenuToggle = (route) => {
    setMenu(false); // Close the menu after clicking a link
    navigate(route); // Navigate to the desired route
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800 text-white shadow-lg py-4 px-6 md:px-16 md:py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/">
          <img src="icon.png" alt="Logo" className="h-10 w-12 md:h-14 md:w-16 transition-transform transform hover:scale-110" />
        </RouterLink>

        {/* Menu Toggle for Mobile */}
        <button
          className="md:hidden text-white transition-transform transform hover:scale-110"
          onClick={() => setMenu((prevMenu) => !prevMenu)}
          aria-label="Toggle menu"
        >
          {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>

        {/* Desktop Menu */}
        <nav
          className={`${
            menu ? 'block' : 'hidden'
          } md:flex md:items-center md:gap-8 absolute md:static top-16 right-6 bg-slate-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none px-6 py-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            <li
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleMenuToggle('/')}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleMenuToggle('/about')}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleMenuToggle('/contact')}
            >
              Contact
            </li>
          </ul>

          {/* Sign In Button */}
          <RouterLink
            to="/login"
            className="block mt-4 md:mt-0 px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            onClick={() => setMenu(false)}
          >
            Sign In
          </RouterLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
