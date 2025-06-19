const Footer = () => (
  <footer
    id="footer"
    data-aos="fade-up"
    className="py-10 bg-gray-900 text-white"
  >
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-bold">Journey</h3>
        <p className="mt-2 text-gray-400">© 2025 All rights reserved</p>
      </div>
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="hover:text-blue-400">Privacy Policy</a>
        <a href="#" className="hover:text-blue-400">Terms of Service</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
      </div>
      <form className="flex">
        <input
          type="email"
          placeholder="Subscribe to newsletter"
          className="px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-700 transition">
          Subscribe
        </button>
      </form>
    </div>
  </footer>
);

export default Footer;
