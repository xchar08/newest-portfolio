import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogdata';

const BlogList = () => {
  const [viewAll, setViewAll] = useState(false);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort blogPosts by date in descending order
  const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.id) - new Date(a.id));

  // If viewAll is false, show only the first 4
  const displayPosts = viewAll ? sortedBlogPosts : sortedBlogPosts.slice(0, 4);

  return (
    <section
      id="blog"
      className="w-full min-h-screen bg-white pt-20 pb-10"
      style={{ fontFamily: "'Fira Mono', monospace" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Blog Page Title */}
        <h1
          className="text-4xl mb-8 text-gray-900"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          data-aos="fade-up"
        >
          Blog
        </h1>

        {/* Vertical list of blog posts */}
        <div className="flex flex-col space-y-6">
          {displayPosts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="flex items-center space-x-4 border-t pt-4 pb-2 hover:bg-white transition-colors"
              data-aos="fade-up"
            >
              {/* Thumbnail image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-28 h-20 object-cover rounded"
                loading="lazy"
              />

              {/* Right-side (date + title + optional excerpt) */}
              <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h2
                  className="text-lg text-gray-800 font-semibold leading-snug"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {post.title}
                </h2>
                {/* Optional excerpt */}
                <p className="text-gray-700 text-sm mt-1">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* "View All" / "View Less" button */}
        <div className="mt-10 flex justify-center">
          {!viewAll ? (
            <button
              onClick={() => setViewAll(true)}
              className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-gray-700"
            >
              View All <span className="ml-2">↗</span>
            </button>
          ) : (
            <button
              onClick={() => setViewAll(false)}
              className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 text-gray-700"
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
