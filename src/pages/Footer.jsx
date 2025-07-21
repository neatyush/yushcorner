import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9fafc] text-[#004e98] py-8 px-4 text-center font-ubuntu border-t border-gray-300 mt-20">
      <p className="mb-3 text-lg font-semibold">
        Thanks for visiting! ☕ I am not asking for a coffee, your one share gives me the same caffine boost.
      </p>
      <a
        href="https://www.linkedin.com/in/ayush-paudel-329175170/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#004e98] font-semibold hover:text-[#1a73e8] transition-colors duration-300"
      >
        <FaLinkedin size={24} />
        Connect with me on LinkedIn
      </a>
      <p className="mt-6 text-sm opacity-75">
        &copy; {new Date().getFullYear()} Ayush Paudel
      </p>
    </footer>
  );
};

export default Footer;
