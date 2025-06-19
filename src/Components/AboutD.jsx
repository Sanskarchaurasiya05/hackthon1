// src/Components/About.js
import React from 'react';
import sanskar from '../assets/sanskar.jpg';

const AboutD = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 max-w-2xl w-full flex flex-col items-center">
      
      <img
        src={sanskar} 
        alt="Developer"
        className="w-32 h-32 rounded-full border-4 border-indigo-400 shadow-lg mb-6 object-cover"
      />
     
      <h1 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">Sanskar Chaurasiya</h1>
     
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
       <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
  Hello! I'm Sanskar, a passionate full-stack developer with a strong focus on crafting seamless user experiences. On the frontend, I specialize in <span className="font-semibold text-indigo-700 dark:text-indigo-300">React.js</span> and <span className="font-semibold text-indigo-700 dark:text-indigo-300">Tailwind CSS</span> to build modern, responsive, and dynamic interfaces. On the backend, I work extensively with <span className="font-semibold text-indigo-700 dark:text-indigo-300">Spring Boot</span> to develop robust REST APIs . I'm dedicated to turning ideas into high-performance, production-ready applications that are both beautiful and functional.
</p>

      </p>
      
      <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg px-6 py-4 mb-4 text-center shadow">
        <p className="text-indigo-700 dark:text-indigo-200 font-semibold text-lg mb-1">
          🚀 Ready to level up your project?
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          I’m available for freelance, remote, or full-time opportunities!
        </p>
      <a
  href="https://wa.me/918318296419?text=Hi%20Sanskar%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
>
  Message Me on WhatsApp
</a>

      </div>
      {/* Social Links (optional) */}
      <div className="flex space-x-4 mt-2">
        <a href="https://github.com/Sanskarchaurasiya05" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 text-2xl">
          <i className="fab fa-github"></i> {/* Or use an icon library */}
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 text-2xl">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* Add more socials if you want */}
      </div>
    </div>
  </section>
);

export default AboutD;
