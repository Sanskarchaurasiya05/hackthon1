import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/journey.jpg';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      <RouterLink to="/" className="flex items-center font-bold text-xl space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500 shadow-lg"
        />
        <span>Journey Begins</span>
      </RouterLink>
      <div className="flex space-x-6 items-center">
         <RouterLink to="/gaming-zone" className="cursor-pointer hover:text-blue-500">
          Home
        </RouterLink>
        <Link to="about" smooth className="cursor-pointer hover:text-blue-500">About</Link>
        <Link to="features" smooth className="cursor-pointer hover:text-blue-500">Services</Link>
        <Link to="testimonials" smooth className="cursor-pointer hover:text-blue-500">Testimonials</Link>
        <RouterLink to="/aboutD" className="cursor-pointer hover:text-blue-500">
          Contact
        </RouterLink>
        <ThemeToggle /> 
      </div>
    </div>
  </nav>
);

export default Navbar;
