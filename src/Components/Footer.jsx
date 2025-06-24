const Footer = () => (
  <footer
    id="footer"
    data-aos="fade-up"
    className="py-10 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300"
  >
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-bold">Journey</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">© 2025 All rights reserved</p>
      </div>
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
      </div>
      <form className="flex">
        <input
          type="email"
          placeholder="Subscribe to newsletter"
          className="px-3 py-2 rounded-l bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none transition-colors"
        />
        <button className="px-4 py-2 bg-blue-600 dark:bg-blue-700 rounded-r hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
          Subscribe
        </button>
      </form>
    </div>
  </footer>
);

export default Footer;
