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
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

// Import HashLink for smooth scrolling
import { HashLink } from 'react-router-hash-link';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return (
      <div className="p-8 text-center text-gray-500">
        Post not found
      </div>
    );
  }

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
      // If it's an internal hash link, use HashLink with a custom scroll offset
      if (href.startsWith('#')) {
        return (
          <HashLink
            smooth
            to={href}
            scroll={el => {
              const yOffset = -100; // Adjust this value for desired offset
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({top: y, behavior: 'smooth'});
            }}
            {...props}
          >
            {children}
          </HashLink>
        );
      }
      // Otherwise, just render a normal link
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
        <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md">
          <ReactMarkdown
            components={renderers}
            remarkPlugins={[remarkGfm, remarkMath, remarkSlug]}
            rehypePlugins={[rehypeKatex]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
