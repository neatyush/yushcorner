import React, { useState } from "react";
import Modal from "./components/Modal";

const Navbar = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const contributeLink = "https://forms.gle/6jdqRZfPci41wKvB8";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex flex-row justify-end items-center gap-4 p-4 max-w-7xl mx-auto">
        <button
            onClick={() => setIsModalOpen(true)}
            className="font-ubuntu text-gray-700 hover:underline transition"
          >
            About me
          </button>
        <a
          href={contributeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold rounded-lg px-4 py-2 text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 transition duration-300"
        >
          Contribute
        </a>
      </div>
       {/* Modal mount */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
    
  );
};

export default Navbar;
