// Projects.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectDetails } from './githubUtils';
// Import your project images
import project1Img from './images/project1.png';
import battlegrounduta from './images/battleground-uta.png';
import genscript from './images/genscript.png';
import wip from './images/wip.png';
import networth from './images/networth.png';

const projects = [
    {
        name: "genscript",
        repo: "xchar08/genscript",
        image: genscript,
        liveLink: null, // Provide link for projects with a live demo
        sourceCode: "https://github.com/xchar08/genscript",
    },
    {
        name: "battleground uta",
        repo: "xchar08/battleground-uta",
        image: battlegrounduta,
        liveLink: "https://battleground-uta.vercel.app/", // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/battleground-uta",
    },
    {
        name: "UTA Swarm (wip)",
        repo: "xchar08/UTA-Swarm",
        image: wip,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/UTA-Swarm",
    },
    {
        name: "NetWorth",
        repo: "xchar08/networth",
        image: networth,
        liveLink: "https://networth-three.vercel.app/", // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/networth",
    },
    {
        name: "Greenfoot Galaga",
        repo: "xchar08/java-oop-greenfoot",
        image: project1Img,
        liveLink: "https://www.greenfoot.org/scenarios/26902", // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/java-oop-greenfoot",
    },
    {
        name: "Tailed",
        repo: "xchar08/tailed",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/tailed",
    },
    {
        name: "Kiba Studies",
        repo: "xchar08/kiba-studies",
        image: project1Img,
        liveLink: "https://kiba-studies.vercel.app/", // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/kiba-studies",
    },
    {
        name: "Neuro Reader",
        repo: "xchar08/neuro-reader",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/neuro-reader",
    },
    {
        name: "Tales of Jim",
        repo: "xchar08/java-cli-game",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/java-cli-game",
    },
    {
        name: "Secret Agent",
        repo: "xchar08/Secret-Agent",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/Secret-Agent",
    },
    {
        name: "Swiper",
        repo: "xchar08/js-server-wipe",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/js-server-wipe",
    },
    {
        name: "Gentoo DWM Bar",
        repo: "xchar08/gentoo-dwm-bar",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/gentoo-dwm-bar",
    },
    {
        name: "BEST Robotics 2021",
        repo: "xchar08/robotc-redshift-robotics-2021",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/robotc-redshift-robotics-2021",
    },
    {
        name: "Get Linused",
        repo: "xchar08/get-linused",
        image: project1Img,
        liveLink: null, // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/get-linused",
    },
    // Add more projects as needed
];
const Projects = () => {
    const [projectDetails, setProjectDetails] = useState({});
  
    useEffect(() => {
      const fetchDetails = async () => {
        const details = {};
        for (const project of projects) {
          const { description } = await fetchProjectDetails(project.repo);
          details[project.name] = { description };
        }
        setProjectDetails(details);
      };
  
      fetchDetails();
    }, []);
  
    return (
      <div
        id="projects"
        className="p-8 bg-white-100 pt-20" // Added pt-20
        style={{ fontFamily: "'Fira Mono', monospace" }}
      >
        <h1
          className="text-4xl mt-10 mb-10 text-center"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          data-aos="fade-up"
        >
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              data-aos="fade-up"
              style={{ maxWidth: '250px', margin: '0 auto' }}
            >
              <img src={project.image} alt={project.name} className="rounded-full h-32 w-32 object-cover mb-4" />
              <Link
                to={`/projects/${project.name}`}
                className="text-2xl font-bold text-gray-800 hover:underline"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {project.name}
              </Link>
              <p className="text-lg text-gray-600 mt-2">
                {projectDetails[project.name]?.description || 'Loading description...'}
              </p>
              <div className="mt-4 flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                  >
                    See Live
                  </a>
                )}
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;