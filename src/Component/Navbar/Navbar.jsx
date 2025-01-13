import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowmenu] = useState(true);

    return (
        <nav className="flex flex-wrap justify-between items-center bg-black/50 text-white px-6 py-4 shadow-md md:px-16 md:py-6 fixed top-0 left-0 w-full z-50 custom-backdrop">

            <a href="#home">
                <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    Chomhang
                </span>
            </a>
            <ul
                className={`${
                    menu ? 'block' : 'hidden'
                } mx-auto bg-gray-800/80 py-3 mt-4 text-lg font-medium md:mt-0 px-4 rounded-lg text-center md:bg-transparent md:static md:mx-0 md:flex md:gap-8`}>
                <a href="#about">
                    <li className="text-white transition-all duration-300 hover:text-teal-400 focus:text-teal-400 p-2 md:p-0">About</li>
                </a>
                <a href="#experience">
                    <li className="text-white transition-all duration-300 hover:text-teal-400 focus:text-teal-400 p-2 md:p-0">Experience</li>
                </a>
                <a href="#project">
                    <li className="text-white transition-all duration-300 hover:text-teal-400 focus:text-teal-400 p-2 md:p-0">Project</li>
                </a>
                <a href="#contact">
                    <li className="text-white transition-all duration-300 hover:text-teal-400 focus:text-teal-400 p-2 md:p-0">Contact</li>
                </a>
            </ul>
            {showMenu ? (
                <RiMenu2Line
                    size={30}
                    className="md:hidden absolute right-6 top-6 cursor-pointer hover:scale-110 transition-transform duration-300"
                    onClick={() => {
                        openMenu(!menu);
                        setShowmenu(!showMenu);
                    }}
                    aria-label="Open menu"
                />
            ) : (
                <RiCloseLine
                    size={30}
                    className="md:hidden absolute right-6 top-6 cursor-pointer hover:scale-110 transition-transform duration-300"
                    onClick={() => {
                        openMenu(false);
                        setShowmenu(true);
                    }}
                    aria-label="Close menu"
                />
            )}
        </nav>
    );
};

export default Navbar;
