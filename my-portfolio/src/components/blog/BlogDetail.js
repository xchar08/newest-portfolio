// src/components/blog/BlogDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './blogdata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkSlug from 'remark-slug';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HashLink } from 'react-router-hash-link';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <div className="p-8 text-center text-gray-500">Post not found</div>;
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
      // Smooth scroll for hash links
      if (href.startsWith('#')) {
        return (
          <HashLink
            smooth
            to={href}
            scroll={(el) => {
              const yOffset = -100;
              const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            {...props}
          >
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
    <div className="pt-20 pb-10 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-2 leading-tight"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {post.title}
        </h1>

        {/* Excerpt below title */}
        {post.excerpt && (
          <p
            className="text-xl mb-6 leading-relaxed"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {post.excerpt}
          </p>
        )}

        {/* Date */}
        <p className="text-sm opacity-70 mb-8">{post.date}</p>

        {/* Feature Image */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-3xl h-72 overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Markdown Content */}
        <div
          className="
            prose
            prose-base    /* or use prose-lg if you like it bigger */
            leading-relaxed
            max-w-none
            dark:prose-invert
            transition-colors
            duration-300

            /* Optionally fine-tune spacing for headings, paragraphs, etc. */
            prose-h1:mb-4
            prose-h2:mb-3
            prose-h3:mb-2
            prose-p:my-4
          "
        >
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
