import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Importing social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          {/* Social Media Links with Icons */}
          <a
            href="https://instagram.com"
            className="text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            className="text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            className="text-2xl hover:text-gray-300 transition-all duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Copyright Text */}
        <p className="text-sm font-montserrat">
          &copy; 2024 BrandUp Creation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
