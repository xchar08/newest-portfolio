// Home.js

import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const textArray = ["build worthwhile solutions", "innovate", "create impactful projects"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-white text-center"
      style={{ fontFamily: "'Fira Mono', monospace" }}
    >
      <div data-aos="fade-up" className="flex items-center justify-center" style={{ transform: 'translateY(-80px)' }}>
        <div className="relative w-40 h-40">
          <img
            src="home-headshot.png" // Replace with your actual profile picture URL
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="spin-circle absolute inset-0 border-4 border-orange-500 rounded-full"></div>
        </div>
      </div>
      <h1 data-aos="fade-up" className="text-3xl mt-5" style={{ fontFamily: "'Times New Roman', Times, serif", transform: 'translateY(-80px)' }}>
        Hi, I'm Jeremiah Pitts,
      </h1>
      <h2 data-aos="fade-up" className="text-orange-400 mt-1" style={{ transform: 'translateY(-80px)' }}>
        a Software Engineering, Physics, & Mathematics Student.
      </h2>
      <div data-aos="fade-up" className="mt-1 text-gray-500" style={{ transform: 'translateY(-80px)' }}>
        I strive to /
      </div>
      <div data-aos="fade-up" className="mt-1 text-gray-500" style={{ transform: 'translateY(-80px)' }}>
        {textArray[index]}
      </div>
      <a
        href="/resume.pdf" // Path to your resume in the public folder
        download="resume.pdf" // Filename for the downloaded file
        className="mt-4 text-orange-400 hover:underline"
        style={{ transform: 'translateY(-80px)' }}
      >
        download my resume
      </a>
    </div>
  );
};

export default Home;
