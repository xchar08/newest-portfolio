// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./public/index.html",       // Include the main HTML file
  ],
  theme: {
    extend: {
      // Extend default theme
      fontFamily: {
        sans: ['Fira Mono', 'monospace'],
        serif: ['EB Garamond', 'serif'],
        mono: ['Fira Mono', 'monospace'],
        'times-new-roman': ['"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        orange: {
          500: '#ff7043', // Custom orange for links
        },
        red: {
          500: '#f87171', // Custom red shades
        },
        gray: {
          700: '#4b5563', // Custom grays
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        offwhite: '#f8f8f8', // Light off-white for backgrounds
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Override typography styles
            'h1, h2, h3': {
              color: theme('colors.gray.900'), // Use Tailwind's gray.900
              fontFamily: theme('fontFamily.serif').join(', '), // Use serif font
            },
            'code': {
              backgroundColor: 'transparent',
              fontSize: 'inherit',
              color: theme('colors.gray.900'), // Ensure code isn't red
            },
            'pre': {
              backgroundColor: theme('colors.offwhite'), // Use defined offwhite
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto', // Enable horizontal scroll if needed
            },
            // Removed or commented out to prevent conflicts with KaTeX
            /*
            'math, .katex': {
              fontSize: '1rem',
              lineHeight: '1.5',
              color: 'inherit',
            },
            */
            'blockquote': {
              borderLeftColor: theme('colors.blue.500'), // Use Tailwind's blue.500
              fontStyle: 'italic',
              paddingLeft: '1rem',
            },
            // Ensure links are styled appropriately
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.orange.600'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Adds prose support
    // Add other plugins here if needed
  ],
};
