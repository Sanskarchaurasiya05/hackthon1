import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import AboutSection from './Components/AboutSection';
import GamingZone from './pages/GamingZone';
import About from './Components/About';
import Features from './Components/Features';

import './index.css'; 
import AboutD from './Components/AboutD';
import Footerg from './Components/Footerg';
import Contact from './Components/Contact';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>

   

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/aboutD" element={<AboutD />} />
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <FeaturesSection />
                <Testimonials />
                  <Footer />
              </>
            }
          />
          <Route path="/gaming-zone" element={
          <main className="relative min-h-screen w-screen overflow-x-hidden">
     <GamingZone/>
      <About />
      <Features />
      <Contact/>
     <Footerg/>
       </main>
          


          }
          />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
