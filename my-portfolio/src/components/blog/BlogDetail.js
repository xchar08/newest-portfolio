// src/BlogDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './blogdata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <div className="p-8 text-center text-gray-500">Post not found</div>;
  }

  return (
    <div className="p-8 bg-offwhite min-h-screen" style={{ fontFamily: "'Fira Mono', monospace" }}>
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-4 text-gray-900"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {post.title}
        </h1>
        <p className="text-gray-500 mb-4">{post.date}</p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover mb-6 rounded-lg"
        />
        <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
