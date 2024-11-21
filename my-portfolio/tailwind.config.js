// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Extend the theme as needed
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
        mono: ['Fira Mono', 'monospace'],
        'times-new-roman': ['"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        orange: {
          500: '#ff7043', // Custom orange color for links
        },
        red: {
          500: '#f87171', // Customize as per design
        },
        gray: {
          700: '#4b5563', // Customize as needed
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
    },
  },
  plugins: [],
}
