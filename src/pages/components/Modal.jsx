import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-backdrop") onClose();
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-[#004e98]">About Me</h2>
        <p className="text-gray-700 text-sm mb-6">
        Hello, I'm Ayush Paudel — a service-driven hospitality professional with experience in Food & Beverage and Sales, and a strategic focus on customer retention and long-term guest relationships.<br>
This platform is my small but meaningful attempt to give back — by sharing simplified, actionable resources to help others learn, grow, and build lasting careers in hospitality.</br>
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
