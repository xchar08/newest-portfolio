import React from 'react';

const experienceData = [
    {
        title: "APM Intern",
        company: "Salesforce",
        duration: "May 2022 - August 2022",
        description: `
I am 1 of 12 out of approximately 8,000 applicants selected for Salesforce's prestigious APM program. I am currently working on the Tableau Exchange team to redesign the submission listing process for our partners. In this internship, I have:
- Conducted two rounds of user research, including a card sorting exercise, with our partners
- Written a PRD
- Designed low fidelity mockups of the redesigned submission form in Figma
        `
    },
    {
        title: "Software Engineering Intern",
        company: "TechCorp",
        duration: "June 2021 - August 2021",
        description: `
During my internship at TechCorp, I was involved in developing new features for their flagship product. I worked closely with the engineering team to:
- Implement new features using JavaScript and React
- Debug and optimize existing code
- Collaborate with UX/UI designers to improve the user experience
        `
    },
    // Add more experience objects here if needed
];

function Experience() {
    return (
        <div className="relative flex flex-col items-center p-8">
                <h1 className="text-4xl font-bold mb-4 text-center mt-32">Experience</h1>
                {experienceData.map((item, index) => (
                <div key={index} className="relative w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 mx-4 my-4 bg-white rounded-lg shadow-lg">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                        <h3 className="text-xl font-semibold mb-1">{item.company}</h3>
                        <p className="text-gray-600 mb-4">{item.duration}</p>
                        <p className="text-gray-800">{item.description}</p>
                    </div>
                    {index < experienceData.length - 1 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -bottom-4 w-px bg-gray-400 h-16"></div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Experience;
