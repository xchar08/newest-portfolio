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
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
            <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                    <img
                        src="your-profile-pic-url" // Replace with your actual profile picture URL
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover"
                    />
                    <div className="spin-circle absolute inset-0 border-4 border-orange-500 rounded-full"></div>
                </div>
            </div>
            <h1 className="mt-4 text-3xl font-bold"> {/* Adjust margin-top here */}
                Hi, I'm Jeremiah Pitts,
            </h1>
            <h2 className="text-orange-400 mt-1"> {/* Adjust margin-top here */}
                a Mechanical, Aerospace, & Software Engineering Student.
            </h2>
            <div className="mt-2 text-gray-500"> {/* Adjust margin-top here */}
                I strive to /
            </div>
            <div className="mt-2 text-gray-500 font-light"> {/* Adjust margin-top here */}
                {textArray[index]}
            </div>
            <div className="mt-6 text-orange-400"> {/* Adjust margin-top here */}
                download my resume
            </div>
        </div>
    );
};

export default Home;
