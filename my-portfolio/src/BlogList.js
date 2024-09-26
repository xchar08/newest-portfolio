// BlogList.js

import React, { useState } from 'react';
import blogPosts from './blogdata';

const BlogList = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const togglePostDetail = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div
      id="blog"
      className="p-8 pt-20 pb-80" // Added pt-20
      style={{ fontFamily: "'Fira Mono', monospace" }}
    >
      <div className="mt-10">
        <h1
          className="text-4xl mb-8 text-center"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          data-aos="fade-up"
        >
          Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {post.title}
              </h2>
              <p className="text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 mb-4">
                {expandedPostId === post.id ? post.content : post.excerpt}
              </p>
              <button
                onClick={() => togglePostDetail(post.id)}
                className="text-blue-500 hover:underline"
              >
                {expandedPostId === post.id ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
