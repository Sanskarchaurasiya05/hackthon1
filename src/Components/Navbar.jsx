import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      <div className="font-bold text-xl">BrandName</div>
      <div className="flex space-x-6 items-center">
        <Link to="hero" smooth className="cursor-pointer hover:text-blue-500">Home</Link>
        <Link to="about" smooth className="cursor-pointer hover:text-blue-500">About</Link>
        <Link to="features" smooth className="cursor-pointer hover:text-blue-500">Services</Link>
        <Link to="testimonials" smooth className="cursor-pointer hover:text-blue-500">Testimonials</Link>
        <Link to="footer" smooth className="cursor-pointer hover:text-blue-500">Contact</Link>
        <ThemeToggle /> {/* Add this here */}
      </div>
    </div>
  </nav>
);

export default Navbar;
