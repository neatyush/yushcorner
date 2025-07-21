import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50">
      <h1 className="text-8xl font-nanito font-bold text-[#004e98] mb-6">404</h1>
      <h2 className="text-3xl lg:text-5xl font-nanito font-semibold text-center mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg font-ubuntu text-gray-700 max-w-xl text-center mb-8 px-4">
        Sorry, the page you are looking for does not exist or has been moved.
        Please check the URL or go back to the homepage.
      </p>

      <Link
        to="/"
        className="bg-[#004e98] hover:bg-[#003366] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
      >
        ← Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
