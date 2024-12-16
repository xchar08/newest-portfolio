// src/components/experience/Experience.js
import React, { useState } from 'react';
import mitesImg from '../../assets/images/experience/mites.svg';
import sansImg from '../../assets/images/experience/sans.svg';
import bellImg from '../../assets/images/experience/bell.svg';
import ericssonImg from '../../assets/images/experience/ericsson.svg';

const experienceData = [
  {
    title: "RAN Advanced Architectures Engineer Intern",
    company: "Ericsson",
    duration: "June 2024 - Present",
    image: ericssonImg,
    description: [
      "+ Selected as one of 10 out of 50 interns for outstanding performance...",
      "+ Developed a PostGREs, Express.JS, and NextJS application...",
      "+ Actively collaborated with interns across departments...",
      "+ Authored and delivered presentations and articles...",
    ]
  },
  {
    title: "Cybersecurity, Software Development, IT Intern",
    company: "Bell Flight (Textron)",
    duration: "September 2021 - January 2022",
    image: bellImg,
    description: [
      "+ Successfully completed legal holds.",
      "+ Converted a MySQL application to MSSQL and PHP.",
      "+ Completed software risk assessments.",
      "+ Developed a Business Data Access script used company-wide.",
      "+ Collected data for a new Material Pass system.",
      "+ Updated the company-wide information database layout.",
    ]
  },
  {
    title: "SEC275: Foundations: Computers, Technology, & Security",
    company: "SANS/GIAC",
    duration: "June 2021 - September 2022",
    image: sansImg,
    description: [
      "+ Completed professional training covering Logic, Data Storage, Cloud Computing, Linux, Networking, Web Servers, Windows, Programming, Encryption, and Exploitation.",
    ]
  },
  {
    title: "Machine Learning + Science Writing",
    company: "MITES/MOSTEC (MIT)",
    duration: "June 2021 - December 2021",
    image: mitesImg,
    description: [
      "+ Attended the selective 6-month MIT MOSTEC program (300 chosen out of 6,000+).",
      "+ Completed coursework in Machine Learning and Science Writing...",
      "+ Built a number recognizer neural network with 97% accuracy.",
    ]
  },
];

function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  return (
    <section
      id="experience"
      className="w-full min-h-screen pt-20 pb-10 px-6 transition-colors duration-300"
      style={{ fontFamily: "'Fira Mono', monospace" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl mb-8"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          data-aos="fade-up"
        >
          Experience
        </h1>

        <div className="flex flex-col space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(index)}
              className="flex justify-between items-center border-t py-4 cursor-pointer"
              data-aos="fade-up"
            >
              <div className="text-lg underline">
                {item.title}
              </div>
              <div className="text-right">
                <div className="font-semibold">{item.company}</div>
                <div className="text-sm text-gray-400">{item.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-100 w-11/12 max-w-md p-6 rounded shadow-lg relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={handleCloseModal}
              aria-label="Close Modal"
            >
              ✕
            </button>
            <div className="mb-6">
              <h2
                className="text-2xl mb-1"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {experienceData[selectedIndex].title}
              </h2>
              <h3 className="text-xl font-semibold">
                {experienceData[selectedIndex].company}
              </h3>
              <p className="text-gray-600 italic mb-4">
                {experienceData[selectedIndex].duration}
              </p>
              <div className="text-gray-800 space-y-2">
                {experienceData[selectedIndex].description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
