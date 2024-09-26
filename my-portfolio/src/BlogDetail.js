import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './BlogData'; // Ensure the import matches the file name

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id, 10));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="p-8" style={{ fontFamily: "'Fira Mono', monospace" }}> {/* Apply Fira Mono globally */}
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}> {/* Apply Times New Roman to h1 */}
                {post.title}
            </h1>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <img src={post.image} alt={post.title} className="w-full h-96 object-cover mb-4 rounded-lg" />
            <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">{post.content}</p>
            </div>
        </div>
    );
};

export default BlogDetail;
