// ProjectDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { fetchProjectDetails } from './githubUtils';
import { marked } from 'marked';
import './markdown.css';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const { description, readmeContent } = await fetchProjectDetails(`xchar08/${projectName}`);
      setProject({ description, readmeContent });
    };

    fetchDetails();

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectName]);

  // Optional: Adjust scroll offset if you have a fixed header
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -64; // Adjust this value according to your header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className="p-8">
      <RouterLink
        smooth
        to="/#projects"
        scroll={scrollWithOffset} // Include if you need to adjust for header offset
        className="text-blue-500 hover:underline"
      >
        &larr; Back to Projects
      </RouterLink>
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
