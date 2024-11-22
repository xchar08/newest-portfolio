import React from 'react';
import mitesImg from '../../assets/images/experience/mites.svg';
import sansImg from '../../assets/images/experience/sans.svg';
import bellImg from '../../assets/images/experience/bell.svg';
import ericssonImg from '../../assets/images/experience/ericsson.svg';

// Updated experienceData with image paths
const experienceData = [
    {
        title: "RAN Advanced Architectures Engineer Intern",
        company: "Ericsson",
        duration: "June 2024 - Present",
        image: ericssonImg, // Add the image path here
        description: [
            "+ Selected as one of 10 out of 50 interns for outstanding performance, demonstrating proactive problem-solving and strategic approach.",
            "+ Developed a PostGREs Express.JS, and NextJS application, significantly enhancing research and strategy tasks, and showcasing technical proficiency and effective communication.",
            "+ Actively collaborated with interns across departments, improving cross-functional synergy and contributing to multiple projects.",
            "+ Authored and delivered clear, persuasive presentations and articles, including a published piece on the company website, highlighting commitment to strategic communication and influence.",
        ]
    },
    {
        title: "Cybersecurity, Software Development, IT Intern",
        company: "Bell Flight (Textron)",
        duration: "September 2021 - January 2022",
        image: bellImg, // Add the image path here
        description: [
            "+ Successfully completed legal holds.",
            "+ Converted a MySQL application to MSSQL and PHP.",
            "+ Completed software risk assessments.",
            "+ Developed a Business Data Access script used company-wide, enhancing data management and accessibility.",
            "+ Collected data for a new Material Pass system",
            "+ Updated the company-wide information database layout, improving data organization and efficiency.",
        ]
    },
    {
        title: "SEC275: Foundations: Computers, Technology, & Security",
        company: "SANS/GIAC",
        duration: "June 2021 - September 2022",
        image: sansImg, // Add the image path here
        description: [
            "+ Completed professional training covering Logic and Data Manipulation, Data Storage and Representation, Cloud Computing, Linux, Networking, Web Servers, Windows, Programming, Encryption, and Exploitation.",
        ]
    },
    {
        title: "Machine Learning + Science Writing",
        company: "Massachusetts Institute of Technology (MITES/MOSTEC)",
        duration: "June 2021 - December 2021",
        image: mitesImg, // Add the image path here
        description: [
            "+ Attended the selective 6-month MIT MOSTEC program, where 300 students were selected from over 6,000 applicants.",
            "+ Completed coursework in Machine Learning and Science Writing, including submitting a formal science article that was recognized as one of the best.",
            "+ Developed a number recognizer neural network with 97% accuracy."
        ]
    },
    // Add more experience objects here if needed
];

function Experience() {
    return (
        <div
            id="experience"
            className="relative flex flex-col items-center p-8 pt-20"
            style={{ fontFamily: "'Fira Mono', monospace" }}
        >
            <h1
                className="text-4xl mb-4 mt-10 text-center"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                data-aos="fade-up"
            >
                Experience
            </h1>
            <div className="w-full max-w-5xl"> {/* Container to limit max width */}
                {experienceData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-start mx-4 my-4 bg-white rounded-lg shadow-lg p-6"
                        data-aos="fade-up"
                    >
                        {/* Image Section */}
                        <div className="flex-shrink-0 mr-6">
                            <img
                                src={item.image}
                                alt={`${item.company} logo`}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                        </div>
                        {/* Text Section */}
                        <div className="flex-grow">
                            <h2
                                className="text-2xl mb-2"
                                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                            >
                                {item.title}
                            </h2>
                            <h3 className="text-xl font-semibold mb-1">{item.company}</h3>
                            <p className="text-gray-600 mb-4">{item.duration}</p>
                            <div className="text-gray-800">
                                {item.description.map((line, lineIndex) => (
                                    <p key={lineIndex} className="mb-2">{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
