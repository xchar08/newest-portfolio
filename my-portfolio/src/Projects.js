// src/components/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectDetails } from './githubUtils';
import { motion } from 'framer-motion';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        liveLink: null,
        sourceCode: "https://github.com/xchar08/genscript",
    },
    {
        name: "battleground uta",
        repo: "xchar08/battleground-uta",
        image: battlegrounduta,
        liveLink: "https://battleground-uta.vercel.app/",
        sourceCode: "https://github.com/xchar08/battleground-uta",
    },
    {
        name: "UTA Swarm (wip)",
        repo: "xchar08/UTA-Swarm",
        image: wip,
        liveLink: null,
        sourceCode: "https://github.com/xchar08/UTA-Swarm",
    },
    {
        name: "NetWorth",
        repo: "xchar08/networth",
        image: networth,
        liveLink: "https://networth-three.vercel.app/",
        sourceCode: "https://github.com/xchar08/networth",
    },
    {
        name: "Greenfoot Galaga",
        repo: "xchar08/java-oop-greenfoot",
        image: project1Img,
        liveLink: "https://www.greenfoot.org/scenarios/26902",
        sourceCode: "https://github.com/xchar08/java-oop-greenfoot",
    },
    // Add the remaining projects...
];

const Projects = () => {
    const [projectDetails, setProjectDetails] = useState({});
    const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
    const swiperRef = useRef(null); // Ref for Swiper instance

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

    // Handlers to pause and resume autoplay on hover
    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <div
            id="projects"
            className="p-8 bg-white pt-20 font-mono relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className="text-4xl mt-10 mb-10 text-center font-serif">Projects</h1>

            <Swiper
                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                spaceBetween={30}
                slidesPerView={1} // Default for small screens
                centeredSlides={true} // Center the active slide
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000} // Smooth transition speed
                keyboard={{ enabled: true }} // Enable keyboard navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1.5, // Slightly more than 1 for better visibility on small screens
                    },
                    768: {
                        slidesPerView: 2, // Show 2 slides on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // Show 3 slides on large screens
                    },
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex); // Update active index
                }}
                className="w-full"
            >
                {projects.map((project) => {
                    const cardContent = (
                        <motion.div
                            className={`bg-white project-card rounded-lg shadow-md p-6 flex flex-col justify-between items-center text-center transition-transform duration-300 min-h-[200px]`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.name} project`}
                                    className="rounded-lg h-40 w-full object-cover mb-4"
                                    loading="lazy"
                                />
                                <h2 className="text-2xl font-bold text-gray-800 font-serif">
                                    {project.name}
                                </h2>
                                <p className="text-sm sm:text-xs md:text-sm text-gray-600 mt-2 h-24 overflow-hidden">
                                    {projectDetails[project.name]?.description || 'Loading description...'}
                                </p>
                            </div>
                            <div className="mt-4 flex gap-3">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 text-xs sm:text-[10px] md:text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        See Live
                                    </a>
                                )}
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 text-xs sm:text-[10px] md:text-xs focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    );

                    return (
                        <SwiperSlide key={project.name}>
                            <Link
                                to={`/projects/${project.name}`}
                                className="block w-full h-full"
                                aria-label={`View details of ${project.name} project`}
                            >
                                {cardContent}
                            </Link>
                        </SwiperSlide>
                    );
                })}
                <br/>
                <br/>
            </Swiper>
        </div>
    );

};

export default Projects;
