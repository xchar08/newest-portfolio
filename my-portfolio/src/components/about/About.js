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
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import {
  SiDevpost,
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
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-8">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Sidebar */}
        <aside className="md:w-1/3 p-6 border-r border-gray-200">
          <div className="flex flex-col items-center">
            <img
              src="line-headshot.png"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border border-gray-300"
            />
            <h1 className="text-4xl mt-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Jeremiah Pitts
            </h1> 
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4 ml-36">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-700 hover:text-orange-500 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#hobbies"
                  className="text-sm text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Hobbies
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-sm text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </nav>
          <div className="-ml-10 flex justify-center mt-10 space-x-4">
            <a
              href="https://www.linkedin.com/in/jeremiahpitts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-xl hover:text-orange-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/xchar08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-xl hover:text-orange-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://devpost.com/xchar08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-xl hover:text-orange-400 transition-colors"
            > 
            <SiDevpost />
          </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-2/3 p-6">
          {/* About Section */}
          <section id="about" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-sm leading-relaxed">
              Hi <span>👋</span>, I’m <span className="font-semibold">Jeremiah Pitts</span>. I’m a junior at{' '}
              <span className="font-semibold">UT Arlington</span>, double majoring in{' '}
              <span className="font-semibold">Software Engineering</span> and{' '}
              <span className="font-semibold">Physics</span> with a minor in{' '}
              <span className="font-semibold">Math</span>. I enjoy coding, exploring new technologies,
              and constantly challenging myself both in and out of the tech realm.
            </p>
            <p className="text-sm mt-4 leading-relaxed">
              Outside of coding, you'll find me at the gym, working on CAD projects, playing the piano,
              or enjoying a good webtoon.
            </p>
          </section>

          {/* Hobbies Section */}
          <section id="hobbies" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaBook className="text-orange-500" />
                <span className="text-sm">Reading Webtoons</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPaintBrush className="text-orange-500" />
                <span className="text-sm">Calisthenics</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPalette className="text-orange-500" />
                <span className="text-sm">Piano</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaChessKnight className="text-orange-500" />
                <span className="text-sm">CAD Projects</span>
              </li>
            </ul>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaGraduationCap className="text-orange-500" />
                <span className="text-sm">
                  Software Engineering &amp; Physics (Double Major),<br />
                  <span className="font-semibold"> UT Arlington</span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaUniversity className="text-orange-500" />
                <span className="text-sm">
                  Minor in <span className="font-semibold">Math</span>
                </span>
              </li>
            </ul>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-16 cursor-pointer hover:text-orange-500 transition-colors"
                >
                  <div className="text-3xl mb-1">{skill.icon}</div>
                  <span className="text-xs text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="flex justify-center space-x-4 mt-8">
            <button
              className="bg-orange-500 text-white text-sm px-5 py-2 rounded-full shadow hover:bg-orange-400 transition-colors"
              onClick={() => window.open('resume.pdf', '_blank')}
            >
              View Resume
            </button>
            <button
              className="bg-orange-500 text-white text-sm px-5 py-2 rounded-full shadow hover:bg-orange-400 transition-colors"
              onClick={() => (window.location.href = '/contact')}
            >
              Get in Touch
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
