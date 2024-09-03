import React, { useState } from 'react';

const timelineData = [
    {
        season: "Fall 2024",
        content: [
            "Participated in hackathons and other coding events.",
            "Worked on collaborative projects with peers.",
            "Took advanced software engineering courses."
        ]
    },
    {
        season: "Summer 2024",
        content: [
            "Worked at Salesforce as 1 of 12 APMs.",
            "Redesigned the Tableau Exchange team's submission listing process.",
            "Learned about product management and design."
        ]
    },
    {
        season: "Spring 2024",
        content: [
            "Focused on classes and extracurricular activities.",
            "Joined a competitive programming club.",
            "Contributed to open-source projects."
        ]
    },
    {
        season: "Winter 2023",
        content: [
            "Worked on various personal projects.",
            "Completed internships with industry exposure.",
            "Developed new skills in AI and ML."
        ]
    },
    {
        season: "Fall 2022",
        content: [
            "Participated in hackathons and other coding events.",
            "Built a web application for local businesses.",
            "Attended tech conferences and meetups."
        ]
    },
    {
        season: "Summer 2022",
        content: [
            "Worked at Salesforce as 1 of 12 APMs.",
            "Redesigned the Tableau Exchange team's submission listing process.",
            "Gained experience in project management."
        ]
    },
    {
        season: "Spring 2022",
        content: [
            "Focused on classes and extracurricular activities.",
            "Started a study group for advanced algorithms.",
            "Volunteered as a coding tutor."
        ]
    },
    {
        season: "Winter 2022",
        content: [
            "Worked on various personal projects.",
            "Interned at a local tech startup.",
            "Learned about new programming languages."
        ]
    },
    {
        season: "Fall 2021",
        content: [
            "Participated in hackathons and other coding events.",
            "Worked on a team project for a non-profit organization.",
            "Explored new technologies like blockchain."
        ]
    },
    {
        season: "Summer 2021",
        content: [
            "Directed and drafted curriculum for Robotics and 3D Printing course through CodeFy.",
            "Wrote for YSP (Youth STEM Publication).",
            "Participated in MIT's program 'MOSTEC'.",
            [
                "Took Machine Learning and Science Writing courses.",
                "Developed a number recognizer neural network with 97% accuracy."
            ]
        ]
    }
];

function Timeline() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const renderContent = (content) => {
        return (
            <div className="ml-4">
                {content.map((item, i) => {
                    if (Array.isArray(item)) {
                        // Render sub-bullets
                        return (
                            <ul key={i} className="list-disc list-inside ml-4">
                                {item.map((subItem, j) => (
                                    <li key={j} className="text-gray-700">{subItem}</li>
                                ))}
                            </ul>
                        );
                    } else {
                        // Render main content without bullets
                        return <div key={i} className="text-gray-700">{item}</div>;
                    }
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center p-8 h-3/4 bg-white">
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
                                {renderContent(item.content)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
