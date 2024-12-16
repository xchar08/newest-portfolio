import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSun, FaLinkedinIn } from 'react-icons/fa';

// Import your separate page components
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import BlogList from './components/blog/BlogList'; 
import BlogDetail from './components/blog/BlogDetail'; 
import Contact from './components/contact/Contact';
import ProjectDetail from './components/projects/ProjectDetail';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'slide' });
  }, []);

  return (
    <>
      {/* Lily Meng–style header */}
      <nav className="fixed w-full z-10 bg-white py-2 px-6 border-b border-gray-200 flex items-center justify-between">
        {/* Left side: Sun icon + Name */}
        <div className="flex items-center space-x-3">
          {/* Square with black sun on white */}
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-sm">
            <FaSun className="text-black" />
          </div>
          {/* Name -> Homepage */}
          <Link to="/" className="text-lg font-mono text-black hover:underline">
            Jeremiah Pitts
          </Link>
        </div>

        {/* Center Nav */}
        <div className="flex items-center space-x-6 font-mono text-sm text-black">
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

        {/* Right side: LinkedIn + Contact */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/jeremiahpitts/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <Link
            to="/contact"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition text-sm"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Main content with top padding to avoid header overlap */}
      <div className="pt-20">
        <Routes>
          {/* Separate pages for each route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetail />} />

          {/* Project Detail (dynamic route) */}
          <Route path="/projects/:projectName" element={<ProjectDetail />} />

          {/* 404 fallback */}
          <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
