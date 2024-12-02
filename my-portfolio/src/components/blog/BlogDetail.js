// src/BlogDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './blogdata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';       // Enables GitHub Flavored Markdown
import remarkMath from 'remark-math';     // Enables parsing of math syntax
import remarkSlug from 'remark-slug';     // Adds slugs to headings for links
import rehypeKatex from 'rehype-katex';   // Renders LaTeX using KaTeX
import 'katex/dist/katex.min.css';        // KaTeX CSS for styling mathematical expressions

// Import the syntax highlighter and desired theme
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'; // You can choose any other theme you prefer

// Import HashLink for smooth scrolling
import { HashLink } from 'react-router-hash-link';

const BlogDetail = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  // Find the blog post with the matching 'id'
  const post = blogPosts.find((p) => p.id === parseInt(id, 10));

  // If no post is found, display a "Post not found" message
  if (!post) {
    return (
      <div className="p-8 text-center text-gray-500">
        Post not found
      </div>
    );
  }

  // Custom renderer for code blocks and links
  const renderers = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={okaidia}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    a({ href, children, ...props }) {
      if (href.startsWith('#')) {
        return (
          <HashLink smooth to={href} {...props}>
            {children}
          </HashLink>
        );
      }
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    },
  };

  return (
    <div
      className="p-8 bg-offwhite min-h-screen"
      style={{ fontFamily: "'Fira Mono', monospace" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Blog Post Title */}
        <h1
          className="text-4xl font-bold mb-4 text-gray-900"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {post.title}
        </h1>

        {/* Blog Post Date */}
        <p className="text-gray-500 mb-4">{post.date}</p>

        {/* Blog Post Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover mb-6 rounded-lg"
        />

        {/* Blog Post Content */}
        <div
          className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md"
          // The 'prose' class is from Tailwind CSS Typography plugin for better styling
        >
          <ReactMarkdown
            components={renderers} // Use custom renderers for code blocks and links
            remarkPlugins={[remarkGfm, remarkMath, remarkSlug]} // Enable Markdown, Math syntax, and add slugs
            rehypePlugins={[rehypeKatex]} // Enable LaTeX rendering
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
