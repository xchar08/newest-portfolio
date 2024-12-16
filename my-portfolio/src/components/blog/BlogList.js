// src/components/blog/BlogList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogdata';

const BlogList = () => {
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.id) - new Date(a.id));
  const displayPosts = viewAll ? sortedBlogPosts : sortedBlogPosts.slice(0, 4);

  return (
    <section id="blog" className="w-full min-h-screen pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <h1
          className="text-4xl mb-8"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          data-aos="fade-up"
        >
          Blog
        </h1>

        <div className="flex flex-col space-y-6">
          {displayPosts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="flex items-center space-x-4 border-t pt-4 pb-2 hover:opacity-90 transition-colors"
              data-aos="fade-up"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-28 h-20 object-cover rounded"
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h2
                  className="text-lg font-semibold leading-snug"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm mt-1">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {!viewAll ? (
            <button
              onClick={() => setViewAll(true)}
              className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-700 text-sm"
            >
              View All <span className="ml-2">↗</span>
            </button>
          ) : (
            <button
              onClick={() => setViewAll(false)}
              className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-700 text-sm"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
