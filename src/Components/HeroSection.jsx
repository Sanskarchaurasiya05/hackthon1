import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Parallax speed={-10}>
        <h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-gray-900 dark:text-white drop-shadow-lg"
          data-aos="fade-down"
        >
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">Your Journey</span>
        </h1>
      </Parallax>
      <Parallax speed={5}>
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 max-w-2xl"
          data-aos="fade-up"
        >
          Discover, connect, and grow with our interactive platform. Scroll down to explore more!
        </p>
      </Parallax>
      <div className="flex flex-col items-center gap-6">
        <Link
          to="about"
          smooth
          className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 animate-bounce cursor-pointer"
          data-aos="zoom-in"
        >
          Get Started
        </Link>
        <ThemeToggle />
      </div>
      <Link to="about" smooth className="absolute bottom-8 animate-bounce cursor-pointer">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-600 dark:text-indigo-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    </section>
  );
};

export default Hero;
