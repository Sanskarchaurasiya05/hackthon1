import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/journey.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change (for mobile)
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { type: 'router', label: 'Home', to: '/gaming-zone' },
    { type: 'scroll', label: 'About', to: 'about' },
    { type: 'scroll', label: 'Services', to: 'features' },
    { type: 'scroll', label: 'Testimonials', to: 'testimonials' },
    { type: 'router', label: 'Contact', to: '/aboutD' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <RouterLink to="/" className="flex items-center font-extrabold text-2xl space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover border-4 border-indigo-600 shadow-xl"
          />
          <span className="text-indigo-600 dark:text-indigo-400">Journey Begins</span>
        </RouterLink>

        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="block w-8 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded"></span>
          <span className="block w-8 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded"></span>
          <span className="block w-8 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded"></span>
        </button>

        {/* Navigation links */}
        <div
          className={`md:flex flex-col md:flex-row md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-md md:shadow-none rounded-b-md md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden md:opacity-100 md:max-h-full'
          }`}
        >
          {navLinks.map((link, idx) =>
            link.type === 'router' ? (
              <RouterLink
                key={link.label}
                to={link.to}
                className="block px-4 py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
              >
                {link.label}
              </RouterLink>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="block px-4 py-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="px-4 py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
