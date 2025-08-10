import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  const baseLinkClass =
    "font-semibold transition-colors duration-300 px-4 py-2 rounded-md";
  const activeLinkClass =
    "text-purple-400 border-b-2 border-purple-400 dark:text-purple-600";
  const inactiveLinkClass =
    "text-gray-300 dark:text-gray-700 hover:text-purple-400 dark:hover:text-purple-600";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 dark:bg-white shadow-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-90 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-5 h-20 w-44">
            <Link to="/" onClick={() => setIsOpen(false)} aria-label="Home">
              <img
                src="/logo.png"
                alt="logo"
                className={`h-15 w-45 transition-transform duration-300 hover:scale-105 ${
                theme === "dark" ? "filter invert brightness-90" : ""
                }`}
  draggable={false}
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                onClick={() => setIsOpen(false)}
                className={`${baseLinkClass} ${
                  isActive(href) ? activeLinkClass : inactiveLinkClass
                } hover:scale-105 transform-gpu`}
              >
                {name}
              </Link>
            ))}

            {/* Sign In Button (Desktop) */}
            <Link
              to="/login"
              className="ml-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-500 dark:focus:ring-indigo-500"
            >
              Sign In
            </Link>

            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-4 p-2 rounded-full bg-purple-600 dark:bg-indigo-700 text-white hover:scale-110 transform transition-transform shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 dark:focus:ring-indigo-500"
              title="Toggle Light/Dark Mode"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle + Sign In Icon */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Sign In Icon (Mobile) */}
            <Link
              to="/login"
              className="text-purple-500 hover:text-purple-700 dark:hover:text-purple-600 transition transform hover:scale-110"
              aria-label="Sign In"
              title="Sign In"
            >
              <UserPlusIcon className="h-7 w-7" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-300 dark:text-gray-700 hover:text-purple-400 dark:hover:text-purple-600 focus:outline-none transition transform hover:scale-110"
              title="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden bg-gray-900 dark:bg-white bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        {navLinks.map(({ name, href }) => (
          <Link
            key={name}
            to={href}
            onClick={() => setIsOpen(false)}
            className={`block px-6 py-3 font-semibold rounded-md transition-colors duration-300 ${
              isActive(href)
                ? "bg-purple-800 text-purple-300 dark:bg-purple-200 dark:text-purple-700"
                : "text-gray-300 dark:text-gray-700 hover:bg-purple-700 hover:text-purple-200 dark:hover:bg-purple-300 dark:hover:text-purple-700"
            }`}
          >
            {name}
          </Link>
        ))}

        {/* Sign Up (Mobile Menu) */}
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="block mt-3 mx-6 px-6 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
        >
          Sign In
        </Link>

        {/* Theme Toggle Button (Mobile) */}
        <div className="mt-5 px-6">
          <button
            onClick={toggleTheme}
            className="w-full py-3 rounded-xl bg-purple-600 dark:bg-indigo-700 text-white font-semibold hover:bg-purple-700 dark:hover:bg-indigo-800 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 dark:focus:ring-indigo-500"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
