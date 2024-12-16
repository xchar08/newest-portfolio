// src/App.js

import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSun, FaLinkedinIn } from 'react-icons/fa';

import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import BlogList from './components/blog/BlogList'; 
import BlogDetail from './components/blog/BlogDetail'; 
import Contact from './components/contact/Contact';
import ProjectDetail from './components/projects/ProjectDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Start in light mode by default

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'slide' });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkBackground = '#181918';
  const lightBackground = '#ffffff';

  // We add 'dark' class to root div if darkMode is true.
  // Then child components can use "dark:bg-..." or "dark:text-..." or "dark:prose-invert"
  return (
    <div className={darkMode ? 'dark min-h-screen' : 'min-h-screen'}>
      <div
        className={`transition-colors duration-300 ${
          darkMode ? 'bg-[#181918] text-white' : 'bg-white text-black'
        } min-h-screen`}
      >
        <nav
          className={`fixed w-full z-10 py-2 px-6 border-b flex items-center justify-between transition-colors duration-300`}
          style={{
            backgroundColor: darkMode ? '#181918' : '#ffffff',
            borderColor: darkMode ? '#4b4e52' : '#d1d5db',
          }}
        >
          {/* Left side */}
          <div className="flex items-center space-x-3">
            <div
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-sm cursor-pointer border"
              style={{
                borderColor: darkMode ? '#ffffff' : '#000000',
                backgroundColor: darkMode ? '#181918' : '#ffffff',
              }}
            >
              <FaSun className={darkMode ? 'text-white' : 'text-black'} />
            </div>
            <Link to="/" className="text-lg font-mono hover:underline">
              Jeremiah Pitts
            </Link>
          </div>

          {/* Center Nav */}
          <div className="flex items-center space-x-6 font-mono text-sm">
            <Link to="/about" className="hover:underline">
              about
            </Link>
            <Link to="/projects" className="hover:underline">
              projects
            </Link>
            <Link to="/experience" className="hover:underline">
              experience
            </Link>
            <Link to="/blog" className="hover:underline">
              blog
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/jeremiahpitts/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                darkMode
                  ? 'border border-white hover:bg-white hover:text-black'
                  : 'border border-black hover:bg-black hover:text-white'
              }`}
            >
              <FaLinkedinIn />
            </a>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full text-sm transition ${
                darkMode
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="pt-20 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogDetail />} />
            <Route path="/projects/:projectName" element={<ProjectDetail />} />

            <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
