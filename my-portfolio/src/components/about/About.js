// src/components/about/About.js
import React from 'react';
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaRobot,
  FaGitAlt,
  FaLinux,
  FaLock,
  FaBook,
  FaPaintBrush,
  FaPalette,
  FaChessKnight,
  FaGraduationCap,
  FaUniversity,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiOpencv,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiMongodb,
} from 'react-icons/si';

// Skills Data
const skillsData = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  { name: 'Machine Learning', icon: <SiTensorflow /> },
  { name: 'Robotics', icon: <FaRobot /> },
  { name: 'Cybersecurity', icon: <FaLock /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'AWS', icon: <SiAmazon /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
];

const About = () => {
  return (
    <section className="min-h-screen py-12 px-6 flex flex-col items-center transition-colors duration-300">
      <h1
        className="text-4xl mb-8"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        About Me
      </h1>

      {/* Top Row: Photo + Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Card: Square Photo */}
        <div className="border border-gray-200 rounded-md flex items-center justify-center transition-transform hover:scale-105 shadow-sm bg-opacity-0">
          <img
            src="line-headshot.png"
            alt="Profile"
            className="w-72 h-96 object-cover rounded-md"
          />
        </div>

        {/* Right Card: Intro */}
        <div className="border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-sm">
          <div>
            <h2 className="text-xl mb-4">
              Hi <span className="inline-block">👋</span>, I’m{' '}
              <span className="font-semibold">Jeremiah Pitts</span>
            </h2>
            <p className="text-sm leading-relaxed">
              I’m a junior at <span className="font-semibold">UT Arlington</span>, 
              double majoring in <span className="font-semibold">Software Engineering </span> 
              and <span className="font-semibold">Physics</span> with a minor in 
              <span className="font-semibold"> Math</span>.
              I love exploring React, Tailwind CSS, Python, and machine learning. 
              Whether it's coding or cooking, I believe in constantly challenging myself.
            </p>
            <p className="text-sm mt-4 leading-relaxed">
              When I’m not coding, I’m in the gym practicing calisthenics, 
              tinkering with CAD projects, playing piano, or binging on webtoons. 
              Always open for new challenges, open-source, and fun tech collaborations!
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-orange-500 text-white font-medium px-5 py-2 rounded-full shadow hover:bg-orange-400 transition-colors">
              Research &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Middle Row: Hobbies + Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mt-8">
        {/* Hobbies Card */}
        <div className="border border-gray-200 rounded-md p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Hobbies</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaBook className="text-orange-500" />
              <span>Reading Webtoons</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPaintBrush className="text-orange-500" />
              <span>Calisthenics</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPalette className="text-orange-500" />
              <span>Piano</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaChessKnight className="text-orange-500" />
              <span>CAD Projects</span>
            </li>
          </ul>
        </div>

        {/* Education Card */}
        <div className="border border-gray-200 rounded-md p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Education</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaGraduationCap className="text-orange-500" />
              <span>
                Software Engineering &amp; Physics (Double Major),<br />
                <span className="font-semibold">UT Arlington</span>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaUniversity className="text-orange-500" />
              <span>
                Minor in <span className="font-semibold">Math</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Card: Skills */}
      <div className="border border-gray-200 rounded-md p-6 max-w-6xl w-full mt-8 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-16 cursor-pointer
                         hover:text-orange-500 transition-colors"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-xs font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex space-x-4 mt-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-400 transition">
          View Resume
        </button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-400 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default About;
