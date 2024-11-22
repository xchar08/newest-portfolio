// src/BlogList.js

import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogdata';

const BlogList = () => {
  // Sort blogPosts by date in descending order
  const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.id) - new Date(a.id));

  return (
    <div
      id="blog"
      className="p-8 pt-20 pb-80 bg-white" // White background for main container
      style={{ fontFamily: "'Fira Mono', monospace" }}
    >
      <div className="mt-10">
        <h1
          className="text-4xl mb-8 text-center text-gray-900"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          data-aos="fade-up"
        >
          Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedBlogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-offwhite p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
                loading="lazy"
              />
              <h2
                className="text-2xl font-semibold mb-2 text-gray-800"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {post.title}
              </h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">
                {post.excerpt}
              </p>
              <Link to={`/post/${post.id}`} className="text-orange-500 hover:underline font-semibold">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
