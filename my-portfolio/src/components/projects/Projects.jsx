// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectDetails, fetchProjectLanguages } from './githubUtils';

// Import images
import galaga from '../../assets/images/projects/galaga.png';
import battlegrounduta from '../../assets/images/projects/battleground-uta.png';
import genscript from '../../assets/images/projects/genscript.png';
import networth from '../../assets/images/projects/networth.png';
import mavgrades from '../../assets/images/projects/mavgrades.png';

const languageColorMap = {
  Python: 'bg-blue-500',
  'Jupyter Notebook': 'bg-orange-500',
  HTML: 'bg-red-500',
  JavaScript: 'bg-yellow-500',
  'C++': 'bg-green-500',
  CSS: 'bg-purple-500',
};

const categories = [
  'All',
  'Machine Learning / Artificial Intelligence',
  'Networking & Cloud Computing',
  'Algorithms / Dynamical Programming',
  'Microservice / Backend Systems',
  'Database Systems',
  'Data Analytics & PreProcessing',
  'Hardware Engineering Integrations',
  'Frontend & UI Development',
  'Full Stack Development',
  'Libraries / Packages / Modules / Applications / Frameworks',
];

const initialProjects = [
  {
    name: 'genscript',
    repo: 'xchar08/genscript',
    category: 'Data Analytics & PreProcessing',
    image: genscript,
  },
  {
    name: 'battleground uta',
    repo: 'xchar08/battleground-uta',
    category: 'Frontend & UI Development',
    image: battlegrounduta,
  },
  {
    name: 'NetWorth',
    repo: 'xchar08/networth',
    category: 'Full Stack Development',
    image: networth,
  },
  {
    name: 'Greenfoot Galaga',
    repo: 'xchar08/java-oop-greenfoot',
    category: 'Algorithms / Dynamical Programming',
    image: galaga,
  },
  {
    name: 'Mavgrades',
    repo: 'acmuta/mavgrades',
    category: 'Frontend & UI Development',
    image: mavgrades,
  },
];

const LanguageDot = ({ lang }) => {
  const dotColor = languageColorMap[lang] || 'bg-gray-400';
  return (
    <div className="flex items-center space-x-2">
      <span className={`w-3 h-3 rounded-full ${dotColor}`} />
      <span>{lang}</span>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchAllDetails = async () => {
      const updated = [];
      for (const proj of initialProjects) {
        const { description } = await fetchProjectDetails(proj.repo);
        const languages = await fetchProjectLanguages(proj.repo);
        updated.push({ ...proj, description, languages });
      }
      setProjects(updated);
      setFilteredProjects(updated);
    };
    fetchAllDetails();
  }, []);

  // Filter logic
  useEffect(() => {
    let temp = [...projects];
    if (activeCategory !== 'All') {
      temp = temp.filter((p) => p.category === activeCategory);
    }
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      temp = temp.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearch) ||
          (p.description && p.description.toLowerCase().includes(lowerSearch))
      );
    }
    setFilteredProjects(temp);
  }, [activeCategory, searchTerm, projects]);

  return (
    <div className="pt-20 pb-16 min-h-screen transition-colors duration-300">
      {/* Search Bar */}
      <div className="flex justify-center mb-6 px-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Jeremiah's Projects"
          className="w-full max-w-2xl border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
      </div>

      {/* Filter Tags */}
      <div className="w-3/4 mx-auto flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full border hover:bg-gray-100 transition ${
              activeCategory === cat ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* All Projects Heading & HR */}
      <h1 className="text-3xl font-bold mb-4 text-center">All Projects</h1>
      <hr className="border-black mb-8 w-3/4 mx-auto" />

      {/* Projects List */}
      <div className="flex flex-col space-y-12 max-w-4xl mx-auto px-4">
        {filteredProjects.map((project, index) => (
          <div key={project.name} className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              {/* Cropped rectangle image on the left */}
              {project.image && (
                <div className="w-full md:w-1/3">
                  <div className="w-full h-40 md:h-48 rounded-md shadow-md overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} project`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Right side text */}
              <div className="flex-1">
                <p className="text-pink-600 text-sm font-semibold mb-1">
                  {project.category || 'Uncategorized'}
                </p>
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="mb-2">
                  {project.description || 'No description available...'}
                </p>
                {/* Language row with dividing lines */}
                {project.languages && project.languages.length > 0 && (
                  <div className="flex flex-wrap items-center space-x-3 text-sm">
                    {project.languages.map((lang, langIndex) => (
                      <React.Fragment key={lang}>
                        {langIndex > 0 && <span className="text-gray-300">|</span>}
                        <LanguageDot lang={lang} />
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {/* “Read Me” link */}
                <div className="mt-3">
                  <Link
                    to={`/projects/${project.name}`}
                    className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full hover:bg-orange-200 transition text-sm"
                  >
                    Read Me
                  </Link>
                </div>
              </div>
            </div>
            {/* Horizontal bar after each project */}
            {index < filteredProjects.length - 1 && (
              <hr className="my-4 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
