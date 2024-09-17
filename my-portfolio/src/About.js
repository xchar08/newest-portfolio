import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center h-3/4 mt-20 bg-white-100 py-12 px-8" style={{ fontFamily: "'Fira Mono', monospace" }}> {/* Fira Mono applied globally */}
            <div className="flex flex-col md:flex-row items-center max-w-7xl w-full">
                <div className="md:w-1/2 p-12 text-center">
                    <h1 className="text-2xl mb-6 text-gray-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Times New Roman applied to h1 */}
                        About Me
                    </h1>
                    <p className="text-m text-gray-600 mb-8 leading-relaxed">
                        Hi, I'm Jeremiah Pitts. I’m a junior at the University of Texas at Arlington, pursuing a software engineering degree with a double major in physics and a minor in math and finance. I have a passion for exploring new learning and growth opportunities. I’m currently working on projects involving React, Tailwind CSS, and Python. When I’m not coding, you can usually find me in the gym doing calisthenics, cooking, or diving into various hobbies like chess, math, reading, engineering, robotics, and coding. I love tackling new challenges and solving problems. My journey has led me through both triumphs and growth opportunities.
                    </p>
                    <p className="text-m text-gray-600 mb-8">
                        Here’s what <a href="/projects" className="text-orange-500 hover:underline">I've been up to</a> and <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">my resume</a>.
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:jeremiahnpitts@gmail.com" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition ease-in-out duration-300">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 p-12 flex items-center justify-center">
                    <img src="about-headshot.png" alt="Profile" className="w-96 h-96 object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default About;
