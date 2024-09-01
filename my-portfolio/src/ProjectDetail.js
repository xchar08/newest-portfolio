import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectDetails } from './githubUtils';
import { marked } from 'marked';
import './markdown.css'; // Import the CSS file for Markdown styling

const ProjectDetail = () => {
    const { projectName } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const { description, readmeContent } = await fetchProjectDetails(`xchar08/${projectName}`);
            setProject({ description, readmeContent });
        };

        fetchDetails();
    }, [projectName]);

    return (
        <div className="p-8">
            {project ? (
                <div>
                    <h1 className="text-4xl font-bold mb-4">{projectName}</h1>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div
                        className="markdown-body bg-white p-6 rounded-lg shadow-md"
                        dangerouslySetInnerHTML={{ __html: marked(project.readmeContent) }}
                    />
                </div>
            ) : (
                <p className="text-gray-500">Loading project details...</p>
            )}
        </div>
    );
};

export default ProjectDetail;
