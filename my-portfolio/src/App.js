import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Timeline from './Timeline';
import Blog from './BlogList';
import ProjectDetail from './ProjectDetail';

// Custom scroll function to adjust for fixed header and extra whitespace
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -144; // Negative offset to account for navbar and padding
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

function App() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-10 bg-white p-4">
        {/* Flex container for centered links */}
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Hamburger icon for mobile */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navbar links (hidden on mobile, flex on larger screens) */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:flex md:items-center md:justify-center md:space-x-4`}
          >
            <ScrollLink
              smooth
              to="/#home"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#experience"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 cursor-pointer"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#projects"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#timeline"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 cursor-pointer"
            >
              Timeline
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#blog"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 cursor-pointer"
            >
              Blog
            </ScrollLink>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Experience />
                <Projects />
                <Timeline />
                <Blog />
              </>
            }
          />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
