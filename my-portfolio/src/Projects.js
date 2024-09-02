import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectDetails } from './githubUtils';
import project1Img from './images/project1.png'; // Update paths as needed

const projects = [
    {
        name: "genscript",
        repo: "xchar08/genscript",
        image: project1Img,
        liveLink: null, // Provide link for projects with a live demo
        sourceCode: "https://github.com/xchar08/genscript",
    },
    {
        name: "anotherProject",
        repo: "xchar08/anotherProject",
        image: project1Img,
        liveLink: "https://example.com", // Set to null or omit for projects without a live demo
        sourceCode: "https://github.com/xchar08/anotherProject",
    },
    // Add more projects as needed
];

const Projects = () => {
    const [projectDetails, setProjectDetails] = useState({});

    useEffect(() => {
        const fetchDetails = async () => {
            const details = {};
            for (const project of projects) {
                const { description, readmeContent } = await fetchProjectDetails(project.repo);
                details[project.name] = { description, readmeContent };
            }
            setProjectDetails(details);
        };

        fetchDetails();
    }, []);

    return (
        <div className="p-8 bg-gray-100">
            <div className="mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center mt-32">Projects</h1>
                <div className="space-y-16">
                    {projects.map((project) => (
                        <div key={project.name} className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/2">
                                <img src={project.image} alt={project.name} className="rounded-lg shadow-lg w-full object-cover" />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-800">{project.name}</h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    {projectDetails[project.name]?.description || 'Loading description...'}
                                </p>
                                <div className="mt-8 flex gap-4">
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                                            See Live
                                        </a>
                                    )}
                                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900">
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
