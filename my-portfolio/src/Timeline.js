import React, { useState } from 'react';

const timelineData = [
    {
        season: "Summer 2022",
        content: "In Summer 2022, I worked at Salesforce as 1 of 12 APMs. I worked on the Tableau Exchange team redesigning the submission listing process."
    },
    {
        season: "Spring 2022",
        content: "Focused on classes and extracurricular activities."
    },
    {
        season: "Winter 2022",
        content: "Worked on various personal projects and internships."
    },
    {
        season: "Fall 2021",
        content: "Participated in hackathons and other coding events."
    }
];

function Timeline() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-white">
            <div className="flex flex-col justify-center w-full max-w-3xl mt-32 mb-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Timeline</h1>
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex items-center justify-between px-4 py-2 bg-gray-200 rounded-lg shadow-md text-left font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <span>{item.season}</span>
                            <svg
                                className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="mt-2 px-4 py-2 bg-white rounded-lg shadow-inner">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
