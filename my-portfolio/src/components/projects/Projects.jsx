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
import mavgrades2 from '../../assets/images/projects/mavgrades2.png';
import momo from '../../assets/images/projects/momo.png';
import kiba from '../../assets/images/projects/kiba.png';
import kiba2 from '../../assets/images/projects/kiba2.png';
import kiba3 from '../../assets/images/projects/kiba3.png';
import tailed from '../../assets/images/projects/tailed.png';
import quench from '../../assets/images/projects/quench.png';
import lugnuts from '../../assets/images/projects/lugnuts.png';
import devtect from '../../assets/images/projects/devtect.png';
import nusfintech2025 from '../../assets/images/projects/nusfintech2025.png';
import neuro from '../../assets/images/projects/neuro.png';
import redshift from '../../assets/images/projects/redshift.png';
import secretagent from '../../assets/images/projects/secretagent.png';

// Import icons from react-icons
import { 
  FaExternalLinkAlt, 
  FaVideo, 
  FaGithub, 
  FaFileWord, 
  FaFilePowerpoint 
} from 'react-icons/fa';

// ------------------------------
// ImageCarousel Component
// ------------------------------
// ImageCarousel Component (updated)

const ImageCarousel = ({ images, altText, autoScrollInterval = 50000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Always call useEffect; inside it, check if images exist.
  useEffect(() => {
    if (!images || images.length === 0) return; // Do nothing if there are no images.
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [images, autoScrollInterval]);

  // Now conditionally render null if there are no images.
  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex]}
        alt={altText}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white opacity-20 hover:opacity-40 focus:outline-none text-sm"
            title="Previous Image"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white opacity-20 hover:opacity-40 focus:outline-none text-sm"
            title="Next Image"
          >
            &#9654;
          </button>
        </>
      )}
    </div>
  );
};

// ------------------------------
// Other Data & Components
// ------------------------------
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

// Updated project objects use an array "images" instead of a single "image".
// (For projects with one image, just pass an array with one element.)
const initialProjects = [
  {
    name: 'Blockchain + ML API',
    repo: 'xchar08/NUSFintech2025',
    category: 'Machine Learning / Artificial Intelligence',
    images: [nusfintech2025],
    videoLink: 'https://youtu.be/ivoEqLG3aAY',
    presentationDocLink: 'https://docs.google.com/document/d/1d7TW9QtAEoIa-LvwZhsuVr4nXZgXLBIbUgKqjQNGu9c/',
    presentationSlideLink: 'https://docs.google.com/presentation/d/1foQ3qKivbaIqeH7YIuIMt9eJcLNMDiy3TK2WV43GFvA/',
  },
  {
    name: 'NetWorth',
    repo: 'xchar08/networth',
    category: 'Full Stack Development',
    images: [networth],
    deployLink: 'https://your-networth.vercel.app/',
  },
  {
    name: 'Devtect',
    repo: 'xchar08/devtect',
    category: 'Machine Learning / Artificial Intelligence',
    images: [devtect],
    deployLink: 'https://devtect.vercel.app/',
    videoLink: 'https://youtu.be/rug4z8Iivd8',
    presentationSlideLink: 'https://docs.google.com/presentation/d/1YHtwJFDciRyziOMboqSvcUEgwqi-JIw4vdz_FJTnvWg/',
  },
  {
    name: 'Kiba Studies',
    repo: 'xchar08/kiba-studies',
    category: 'Frontend & UI Development',
    images: [kiba, kiba2, kiba3],
    deployLink: 'https://kiba-studies.vercel.app/',
  },
  {
    name: 'Lug Nuts Website',
    repo: 'uta-lug-nuts/lug-nuts',
    category: 'Frontend & UI Development',
    images: [lugnuts],
    deployLink: 'https://lugtnuts.org',
  },
  {
    name: 'genscript',
    repo: 'xchar08/genscript',
    category: 'Data Analytics & PreProcessing',
    images: [genscript],
  },
  {
    name: 'momo bot',
    repo: 'xchar08/momo-bot',
    category: 'Libraries / Packages / Modules / Applications / Frameworks',
    images: [momo],
  },
  {
    name: 'battleground uta',
    repo: 'xchar08/battleground-uta',
    category: 'Frontend & UI Development',
    images: [battlegrounduta],
    deployLink: 'https://battleground-uta.vercel.app/',
  },
  {
    name: 'Quench',
    repo: 'xchar08/quench',
    category: 'Machine Learning / Artificial Intelligence',
    images: [quench],
    deployLink: 'https://quench-fires.vercel.app/',
    videoLink: 'https://youtu.be/_MlsHqO0AZc',
    presentationSlideLink: 'https://docs.google.com/presentation/d/1QzZRt1Y6cO4Wwg7yOgKRLkmpxdmrjdM5j7IDhAymRwU/',
  },
  {
    name: 'BEST Robotics Code 2021',
    repo: 'xchar08/robotc-redshift-robotics-2021',
    category: 'Hardware Engineering Integrations',
    images: [redshift],
  },
  {
    name: 'Mavgrades',
    repo: 'acmuta/mavgrades',
    category: 'Frontend & UI Development',
    images: [mavgrades, mavgrades2],
    deployLink: 'https://www.mavgrades.com/',
  },
  {
    name: 'Neuro Reader',
    repo: 'xchar08/neuro-reader',
    category: 'Libraries / Packages / Modules / Applications / Frameworks',
    images: [neuro],
  },
  {
    name: 'Secret Agent',
    repo: 'xchar08/Secret-Agent',
    category: 'Full Stack Development',
    images: [secretagent],
    presentationDocLink: 'https://docs.google.com/document/d/1-L23gqJfYoFLtRlU15294s8Nui7a9YLkNjEmYkRxlLI/',
    presentationSlideLink: 'https://docs.google.com/presentation/d/1Irn0Q3gEuMONn3lDr2BsC-VGVB-dVGkY6twwNuBvIVU/',
  },
  {
    name: 'Greenfoot Galaga',
    repo: 'xchar08/java-oop-greenfoot',
    category: 'Algorithms / Dynamical Programming',
    images: [galaga],
    deployLink: 'https://www.greenfoot.org/scenarios/26902',
  },
  {
    name: 'Tailed',
    repo: 'xchar08/tailed',
    category: 'Algorithms / Dynamical Programming',
    images: [tailed],
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

// ------------------------------
// Projects Component
// ------------------------------
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
              {/* Image Carousel on the left */}
              {project.images && project.images.length > 0 && (
                <div className="w-full md:w-1/3">
                  <div className="w-full h-40 md:h-48 rounded-md shadow-md overflow-hidden">
                    <ImageCarousel images={project.images} altText={`${project.name} cover`} />
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
                {/* “Read Me” and optional icon links */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Link
                    to={`/projects/${project.name}`}
                    className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full hover:bg-orange-200 transition text-sm"
                  >
                    Read Me
                  </Link>
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Deployment"
                      className="inline-block bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Watch Video"
                      className="inline-block bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <FaVideo />
                    </a>
                  )}
                  {(project.githubLink || project.repo) && (
                    <a
                      href={project.githubLink ? project.githubLink : `https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      className="inline-block bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.presentationDocLink && (
                    <a
                      href={project.presentationDocLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Presentation Document"
                      className="inline-block bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <FaFileWord />
                    </a>
                  )}
                  {project.presentationSlideLink && (
                    <a
                      href={project.presentationSlideLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Presentation Slideshow"
                      className="inline-block bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <FaFilePowerpoint />
                    </a>
                  )}
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
