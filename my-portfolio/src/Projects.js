import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectDetails } from './githubUtils';
import project1Img from './images/project1.png'; // Update paths as needed

const projects = [
    {
        name: "genscript",
        repo: "xchar08/genscript",
        image: project1Img,
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
        <div className="p-8">
            <div className="mt-32"> {/* Add margin-top here to move content down */}
                <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.name} className="border rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                                <p className="text-gray-700 mb-4">{projectDetails[project.name]?.description || 'Loading description...'}</p>
                                <Link to={`/projects/${project.name}`} className="text-blue-500 hover:underline">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
