import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-center md:text-left text-lg md:text-base font-light text-white">© 2025 All rights reserved | Made by Muhammad Novel</h1>

        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="https://github.com/Huove"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-white transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={20} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-novel-679918381"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/takano154"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-pink-500 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram size={20} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;