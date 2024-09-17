import React from 'react';

const experienceData = [
    {
        title: "RAN Advanced Architectures Engineer Intern",
        company: "Ericsson",
        duration: "June 2024 - Present",
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
        description: [
            "+ Successfully completed legal holds.",
            "+ Converted a MySQL application to MSSQL and PHP.",
            "+ Completed software risk assesments.",
            "+ Developed a Business Data Access script used company-wide, enhancing data management and accessibility.",
            "+ Collected data for a new Material Pass system",
            "+ Updated the company-wide information database layout, improving data organization and efficiency.",

        ]
    },
    {
        title: "SEC275: Foundations: Computers, Technology, & Security",
        company: "SANS/GIAC",
        duration: "June 2021 - September 2022",
        description: [
            "+ Completed professional training covering Logic and Data Manipulation, Data Storage and Representation, Cloud Computing, Linux, Networking, Web Servers, Windows, Programming, Encryption, and Exploitation.",
        ]
    },
    {
        title: "Machine Learning + Science Writing",
        company: "Massachusetts Institute of Technology (MITES/MOSTEC)",
        duration: "June 2021 - December 2021",
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
        <div className="relative flex flex-col items-center p-8" style={{ fontFamily: "'Fira Mono', monospace" }}> {/* Apply Fira Mono globally */}
            <h1 className="text-4xl mb-4 mt-10 text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Apply Times New Roman to h1 */}
                Experience
            </h1>
            {experienceData.map((item, index) => (
                <div key={index} className="relative w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 mx-4 my-4 bg-white rounded-lg shadow-lg">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Apply Times New Roman to h2 */}
                            {item.title}
                        </h2>
                        <h3 className="text-xl font-semibold mb-1">{item.company}</h3>
                        <p className="text-gray-600 mb-4">{item.duration}</p>
                        {/* Render each description line */}
                        <div className="text-gray-800">
                            {item.description.map((line, lineIndex) => (
                                <p key={lineIndex} className="mb-2">{line}</p>
                            ))}
                        </div>
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