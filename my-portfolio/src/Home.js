import React, { useEffect, useState } from 'react';
import './Home.css'; // Ensure this file is updated for the correct font imports

const Home = () => {
    const [index, setIndex] = useState(0);
    const textArray = ["build worthwhile solutions", "innovate", "create impactful projects"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [textArray.length]);

    return (
        <div className="flex flex-col items-center justify-center h-1/2 bg-white text-center" style={{ fontFamily: "'Fira Mono', monospace" }}> {/* Apply Fira Mono globally */}
            <div className="flex items-center justify-center mt-52">
                <div className="relative w-40 h-40">
                    <img
                        src="home-headshot.png" // Replace with your actual profile picture URL
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover"
                    />
                    <div className="spin-circle absolute inset-0 border-4 border-orange-500 rounded-full"></div>
                </div>
            </div>
            <h1 className="mt-2 text-3xl" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Apply Times New Roman to heading */}
                Hi, I'm Jeremiah Pitts,
            </h1>
            <h2 className="text-orange-400 mt-1"> {/* Fira Mono used as it is global */}
                a Software Engineering, Physics, & Mathematics Student.
            </h2>
            <div className="mt-1 text-gray-500"> {/* Fira Mono applied */}
                I strive to /
            </div>
            <div className="mt-1 text-gray-500"> {/* Fira Mono applied */}
                {textArray[index]}
            </div>
            <a
                href="/resume.pdf" // Path to your resume in the public folder
                download="resume.pdf" // Filename for the downloaded file
                className="mt-4 text-orange-400 hover:underline" // Fira Mono applied as it is global
            >
                download my resume
            </a>
        </div>
    );
};

export default Home;
