import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogdata';

const BlogList = () => {
    return (
        <div className="p-8" style={{ fontFamily: "'Fira Mono', monospace" }}> {/* Apply Fira Mono globally */}
            <div className="mt-10">
                <h1 className="text-4xl mb-8 text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Apply Times New Roman to h1 */}
                    Blog
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Apply Times New Roman to h2 */}
                                {post.title}
                            </h2>
                            <p className="text-gray-500 mb-2">{post.date}</p>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
