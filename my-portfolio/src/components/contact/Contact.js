// src/components/contact/Contact.js
import React from 'react';

const rotatingWords = [
  'Curator ✌️',
  'Thinker ✌️',
  'Collaborator ✌️',
  'Innovator ✌️',
  'Empathizer ✌️',
  'Generator ✌️',
  'Storyteller ✌️',
];

function Contact() {
  return (
    <div className="h-screen flex flex-col text-inherit overflow-hidden">
      {/* Horizontal Scrolling Nav */}
      <div className="py-3 border-b border-gray-500 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap text-xl font-mono tracking-wider">
          {rotatingWords.map((word, idx) => (
            <span key={idx} className="mx-4">
              {word}
            </span>
          ))}
          {rotatingWords.map((word, idx) => (
            <span key={idx + rotatingWords.length} className="mx-4">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Main contact content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="flex flex-col justify-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6" 
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Let’s craft something extraordinary together!
            </h1>
            <p className="text-md mb-8">
              If you are thinking about hiring me or would like to discuss a project, get in touch with me at
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M16 12a4 4 0 01-8 0m8 0a4 4 0 01-8 0m8 0c0 2.21-1.79 
                           4-4 4s-4-1.79-4-4m8 0c0-2.21-1.79-4-4-4s-4 1.79-4 4"/>
                </svg>
                <span className="font-semibold">Email: jeremiahnpitts@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M17.657 16.657L13.414 12m4.243 4.243A9 9 
                           0 1112 3v0a9 9 0 014.243 16.657z"/>
                </svg>
                <span className="font-semibold">Arlington, Texas</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-md p-6 border border-gray-500 shadow-sm">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="John Doe"
                className="rounded-md p-3 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 placeholder-gray-300 bg-gray-700"
              />
              <input
                type="email"
                placeholder="hello@example.com"
                className="rounded-md p-3 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 placeholder-gray-300 bg-gray-700"
              />
              <input
                type="text"
                placeholder="Subject"
                className="rounded-md p-3 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 placeholder-gray-300 bg-gray-700"
              />
              <textarea
                placeholder="Message in brief..."
                rows="4"
                className="rounded-md p-3 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 placeholder-gray-300 bg-gray-700"
              />
              <button
                type="submit"
                className="inline-block bg-orange-500 hover:bg-orange-400 
                           text-white font-semibold px-6 py-2 mt-3 rounded-full transition 
                           duration-300 ease-in-out focus:outline-none self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
