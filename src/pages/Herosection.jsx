import React from "react";
import { FaBook, FaLightbulb, FaTools, FaUserTie, FaSearch } from "react-icons/fa";

const Herosection = () => {
  return (
    <main className="mt-8 pt-[100px] lg:pt-30">
      {/* Heading */}
      <div className="flex flex-col gap-3 text-center justify-center lg:gap-4">
        <p className="font-nunito text-3xl lg:text-[40px]">
          Ayush Paudel's Corner
        </p>
       <hr className="bg-[#004e98] h-1 w-24 mx-auto rounded-full" />


      </div>

      {/* Subheading */}
      <div className="mt-6 flex justify-center">
        <p className="text-md font-semibold text-gray-600 mb-6">
          One-Stop Portal For Hospitality Lovers
        </p>
      </div>
    
      {/* Search Box with Icon */}
      <form className="mt-8 flex justify-center">
        <div className="relative w-2/4">
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            aria-label="Search blogs"
            placeholder="Search blogs..."
            className="rounded-xl h-12 pl-10 pr-4 w-full bg-[#f9fafc] border border-gray-400"
          />
          <FaSearch className="absolute top-3.5 left-3 text-gray-500" />
        </div>
      </form>

      {/* Category Buttons */}
      <div className="mt-8 flex flex-row justify-center gap-2 flex-wrap p-8">
  <button className="flex items-center gap-2 bg-[#004e98] text-white rounded-md font-medium px-4 py-2 hover:bg-slate-700 transition duration-500 transform hover:scale-105 hover:-translate-y-1">
    <FaBook className="text-yellow-300" />
    Free Learning Resources
  </button>

  <button className="flex items-center gap-2 bg-[#004e98] text-white rounded-md font-medium px-4 py-2 hover:bg-slate-700 transition duration-500 transform hover:scale-105 hover:-translate-y-1">
    <FaLightbulb className="text-yellow-400" />
    Tips and Tricks
  </button>

  <button className="flex items-center gap-2 bg-[#004e98] text-white rounded-md font-medium px-4 py-2 hover:bg-slate-700 transition duration-500 transform hover:scale-105 hover:-translate-y-1">
    <FaTools className="text-teal-300" />
    Tools
  </button>

  <button className="flex items-center gap-2 bg-[#004e98] text-white rounded-md font-medium px-4 py-2 hover:bg-slate-700 transition duration-500 transform hover:scale-105 hover:-translate-y-1">
    <FaUserTie className="text-orange-300" />
    Interview
  </button>
</div>

    </main>
  );
};

export default Herosection;
