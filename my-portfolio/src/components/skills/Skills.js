// src/components/skills/Skills.js

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
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiOpencv,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiAmazon, // Alternative AWS icon
  SiMongodb,
} from 'react-icons/si';
// Optionally import a generic cloud icon
// import { SiCloud } from 'react-icons/si';

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
  { name: 'AWS', icon: <SiAmazon /> }, // Updated icon
  { name: 'MongoDB', icon: <SiMongodb /> },
  // Alternatively, use a generic cloud icon
  // { name: 'AWS', icon: <SiCloud /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-40 pb-60 bg-white" 
      data-aos="fade-up"
    >
        <div className="max-w-7xl mx-auto px-4">
        <h1
            className="text-4xl mb-4 mt-10 text-center"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            data-aos="fade-up"
        >
            Skills
        </h1>
        <div className="flex flex-wrap justify-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-6 text-gray-800 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              aria-label={skill.name}
            >
              <div className="text-6xl mb-2" aria-hidden="true">
                {skill.icon}
              </div>
              <p className="text-xl special-text">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
