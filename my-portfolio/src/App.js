// App.js

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashLink as ScrollLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
    });
  }, []);

  return (
    <>
      <nav className="fixed w-full z-10 bg-white flex justify-center space-x-4 p-4">
        <ScrollLink smooth to="/#home" scroll={scrollWithOffset} className="text-gray-500 cursor-pointer">
          Home
        </ScrollLink>
        <ScrollLink smooth to="/#about" scroll={scrollWithOffset} className="text-gray-500 cursor-pointer">
          About
        </ScrollLink>
        <ScrollLink smooth to="/#experience" scroll={scrollWithOffset} className="text-gray-500 cursor-pointer">
          Experience
        </ScrollLink>
        <ScrollLink smooth to="/#projects" scroll={scrollWithOffset} className="text-gray-500 cursor-pointer">
          Projects
        </ScrollLink>
        <ScrollLink smooth to="/#timeline" scroll={scrollWithOffset} className="text-gray-500 cursor-pointer">
          Timeline
        </ScrollLink>
        <ScrollLink smooth to="/#blog" scroll={scrollWithOffset} className="text-gray-500 cursor-pointer">
          Blog
        </ScrollLink>
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
