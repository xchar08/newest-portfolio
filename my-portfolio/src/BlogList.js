import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogdata';

const BlogList = () => {
    return (
        <div className="p-8">
            <div className="mt-32"> {/* Add margin-top here to move content down */}
                <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
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
