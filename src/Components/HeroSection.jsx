import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">Your Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          Build, grow, and succeed with our modern solution for all your needs. Experience innovation and support, every step of the way.
        </p>
        <button
          className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg"
          onClick={() => navigate("/gaming-zone")}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
