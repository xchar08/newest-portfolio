import React, { useEffect, useState } from 'react';
import './Home.css'; // Create a CSS file for additional styling

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
        <div className="flex flex-col items-center justify-center h-3/4 bg-white text-center"> {/* Adjusted height */}
            <div className="flex items-center justify-center mt-72">
                <div className="relative w-40 h-40">
                    <img
                        src="home-headshot.png" // Replace with your actual profile picture URL
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover"
                    />
                    <div className="spin-circle absolute inset-0 border-4 border-orange-500 rounded-full"></div>
                </div>
            </div>
            <h1 className="mt-2 text-3xl font-bold"> {/* Adjusted margin-top to 2 */}
                Hi, I'm Jeremiah Pitts,
            </h1>
            <h2 className="text-orange-400 mt-1"> {/* Adjusted margin-top remains 1 */}
                a Software Engineering, Physics, & Mathematics Student.
            </h2>
            <div className="mt-1 text-gray-500"> {/* Adjusted margin-top to 1 */}
                I strive to /
            </div>
            <div className="mt-1 text-gray-500"> {/* Adjusted margin-top to 1 */}
                {textArray[index]}
            </div>
            <a
                href="/resume.pdf" // Path to your resume in the public folder
                download="resume.pdf" // Filename for the downloaded file
                className="mt-4 text-orange-400 hover:underline" // Adjusted margin-top to 4
            >
                download my resume
            </a>
        </div>
    );
};

export default Home;
