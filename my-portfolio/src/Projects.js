// src/components/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectDetails } from './githubUtils';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // Using Coverflow instead of Fade

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

    useEffect(() => {
        // Initial GSAP animation for all slides
        gsap.fromTo(
            '.project-card',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
        );
    }, []);

    // Function to animate a specific slide
    const animateSlide = (slide) => {
        if (slide) {
            gsap.fromTo(
                slide.querySelector('.project-card'),
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
            );
        }
    };

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
                modules={[Navigation, Pagination, Autoplay, Keyboard, EffectCoverflow]}
                spaceBetween={30}
                slidesPerView={1.2} // Shows one full slide and part of the next
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
                effect="coverflow" // Apply Coverflow effect
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 2.2,
                    },
                    1024: {
                        slidesPerView: 3.2,
                    },
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    animateSlide(activeSlide);
                }}
                className="w-full"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={project.name}>
                        <motion.div
                            className="bg-white project-card rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={project.image}
                                alt={`Screenshot of ${project.name} project`}
                                className="rounded-lg h-32 w-full object-cover mb-2"
                                loading="lazy"
                            />
                            <Link
                                to={`/projects/${project.name}`}
                                className="text-xl font-bold text-gray-800 hover:underline font-serif focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                {project.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                                {projectDetails[project.name]?.description || 'Loading description...'}
                            </p>
                            <div className="mt-2 flex gap-2">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        See Live
                                    </a>
                                )}
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 py-1 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    Source Code
                                </a>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev-custom" aria-label="Previous Slide"></div>
                <div className="swiper-button-next-custom" aria-label="Next Slide"></div>
            </Swiper>
        </div>
    );
};

export default Projects;
