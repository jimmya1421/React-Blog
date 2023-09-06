import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
      setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl">
              Blog
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="bg-gray-100 rounded-full px-4 py-2 pr-8 focus:outline-none"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mt-3 mr-3">
              <ion-icon name="search-sharp"></ion-icon>
                            </div>
            </div>
            <div className="ml-4 hidden md:flex">
              <Link
                to="/"
                className="inline-block py-2 px-4 text-gray-700 hover:text-black font-bold"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="inline-block py-2 px-4 text-gray-700 hover:text-black font-bold"
              >
                Blog
              </Link>
              <Link
                to="/About"
                className="inline-block py-2 px-4 text-gray-700 hover:text-black font-bold"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="inline-block py-2 px-4 text-gray-700 hover:text-black font-bold"
              >
                Contact
              </Link>
            </div>
            <div className="ml-4 md:hidden">
              {isMenuOpen ? (
                <FaTimes
                  onClick={handleMenuToggle}
                  className="text-gray-500 cursor-pointer"
                />
              ) : (
                <FaBars
                  onClick={handleMenuToggle}
                  className="text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-700 hover:text-black font-bold"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block py-2 px-4 text-gray-700 hover:text-black font-bold"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-700 hover:text-black font-bold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 text-gray-700 hover:text-black font-bold"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
    );
}

export default Navbar;
