import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaBriefcase,
  FaHandsHelping,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import FaBars and FaTimes for the hamburger menu
import logo from "../assets/w.png"; // Import the logo from the assets folder

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="BrandUp Creation Logo"
            className="w-10 object-cover"
          />
          <h1 className="text-3xl font-extrabold font-montserrat">
            BrandUp Creation
          </h1>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Navigation Section */}
        <nav
          className={`lg:flex items-center space-x-6 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block space-y-4" : "hidden"
          } lg:block lg:space-y-0 lg:space-x-6`}
        >
          <Link
            to="/"
            className="flex items-center hover:underline transition-all duration-300 ease-in-out"
          >
            <FaHome className="mr-2 font-montserrat" />
            Home
          </Link>
          <Link
            to="/services"
            className="flex items-center hover:underline transition-all duration-300 ease-in-out"
          >
            <FaTools className="mr-2 font-montserrat" />
            Services
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center hover:underline transition-all duration-300 ease-in-out"
          >
            <FaBriefcase className="mr-2 font-montserrat" />
            Portfolio
          </Link>
          <Link
            to="/why-choose-us"
            className="flex items-center hover:underline transition-all duration-300 ease-in-out"
          >
            <FaHandsHelping className="mr-2 font-montserrat" />
            Why Choose Us
          </Link>
          <Link
            to="/get-in-touch"
            className="flex items-center hover:underline transition-all duration-300 ease-in-out"
          >
            <FaPhoneAlt className="mr-2 font-montserrat" />
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
