import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Timeline from './Timeline';
import About from './About';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail'; // Import the ProjectDetail component
import Experience from './Experience';
import Blog from './BlogList';
import BlogDetail from './BlogDetail'; // Import the BlogDetail component

function App() {
    return (
        <Router>
            <nav className="flex justify-center space-x-4 p-4">
                <Link to="/" className="text-gray-500">Home</Link>
                <Link to="/timeline" className="text-gray-500">Timeline</Link>
                <Link to="/about" className="text-gray-500">About</Link>
                <Link to="/projects" className="text-gray-500">Projects</Link>
                <Link to="/experience" className="text-gray-500">Experience</Link>
                <Link to="/blog" className="text-gray-500">Blog</Link>

            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectName" element={<ProjectDetail />} /> {/* Add dynamic route for project details */}
                <Route path="/experience" element={<Experience />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} /> {/* Route for blog detail */}
                
            </Routes>
        </Router>
    );
}

export default App;
