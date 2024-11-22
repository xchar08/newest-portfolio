import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import BlogList from './BlogList'; // Blog list component
import BlogDetail from './BlogDetail'; // Blog detail component
import ProjectDetail from './ProjectDetail';

// Custom scroll function
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -90;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'slide' });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-10 bg-white p-4 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          <div className="md:hidden absolute right-4">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:flex md:items-center md:justify-center md:space-x-6`}
          >
            <ScrollLink
              smooth
              to="/#home"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#projects"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              smooth
              to="/#experience"
              scroll={scrollWithOffset}
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Experience
            </ScrollLink>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="block mt-4 md:mt-0 text-gray-800 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Experience />
              </>
            }
          />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetail />} />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
          <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
