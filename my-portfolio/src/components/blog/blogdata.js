// src/blogData.js
import blog001Img from '../../assets/images/blogs/blog001.jpg';
import blog002Img from '../../assets/images/blogs/blog002.jpg';
import blog003Img from '../../assets/images/blogs/blog003.jpg';
import blog004Img from '../../assets/images/blogs/blog004.jpg';

const blogPosts = [
  {
      id: 1,
      title: "Welcome to My Journey: Software Engineering and Physics at UT Arlington",
      date: "November 21, 2024",
      excerpt: "An introduction to who I am, my passions, and what you can expect from my blog.",
      content: `
# Welcome to My Journey: Software Engineering and Physics at UT Arlington

**Date:** November 22, 2024

**Excerpt:** An introduction to who I am, my passions, and what you can expect from my blog.

![Blog Image](/images/blog1.jpg)

**Hey there!**

Welcome to my blog! I'm **Jeremiah Pitts**, juggling a double major in **Software Engineering** and **Physics** at **The University of Texas at Arlington**, with a minor in **Mathematics**. If you're into robotics, machine learning, cybersecurity, or just nerding out over tech and science, you're in the right place.

## **About Me**

I've dabbled in a bunch of cool stuff to keep things interesting:

- **Maverick Rover Team**: Designing robotic arms for lunar exploration. It's been a blast solving mechanical puzzles and getting hands-on with hardware.

- **NASA L'SPACE Program**: Diving into mission concept design as a Lead Systems Engineer. Collaborating with a multidisciplinary team? Yes, please!

- **Undergraduate Research**: Playing with machine learning algorithms at the ATLAS Project/CERN Tier 2. Simulating subatomic particles is as wild as it sounds.

- **Cybersecurity Club at UT Arlington**: Leading web development and workshops. Helping others sharpen their cybersecurity skills is super rewarding.

## **What This Blog Is About**

Here's what you can expect from my corner of the internet:

- **Share Knowledge**: Deep dives into software development, physics concepts, and the latest tech trends.

- **Document Projects**: Chronicles of my work with the Maverick Rover Team, NASA projects, and personal AI experiments.

- **Foster Community**: Engaging with fellow tech enthusiasts, answering questions, and brainstorming ideas together.

## **Get in Touch**

I'm always down to connect and collaborate:

- **Email**: [jeremiahnpitts@gmail.com](mailto:jeremiahnpitts@gmail.com)
- **LinkedIn**: [linkedin.com/in/jeremiahpitts](https://www.linkedin.com/in/jeremiahpitts)
- **GitHub**: [github.com/xchar08](https://github.com/xchar08)

Thanks for stopping by! Stay tuned for upcoming posts where we'll dive into [React Hooks](/post/2), [Puppeteer](/post/3) for web scraping, [building APIs](/post/4) with Express.js, and [styling](/post/5) with Tailwind CSS!

Catch you later,

**Jeremiah Pitts**
      `,
      image: blog001Img
  },
  {
      id: 2,
      title: "Mastering React Hooks: A Comprehensive Guide",
      date: "November 21, 2024",
      excerpt: "An in-depth exploration of React Hooks and how they revolutionize component logic in React applications.",
      content: `
# Mastering React Hooks: A Comprehensive Guide

**Date:** November 23, 2024

**Excerpt:** An in-depth exploration of React Hooks and how they revolutionize component logic in React applications.

![Blog Image](/images/blog2.jpg)

**Introduction**

Alright, so you want to get into **React Hooks**, huh? Let's break it down.

## **Why React Hooks?**

Before Hooks, managing state and lifecycle methods in functional components was a pain. You had to use class components, which were verbose and kinda clunky. Hooks changed the game by:

- Letting you add state to functional components.
- Reusing stateful logic without messing up your component hierarchy.
- Giving you a more straightforward API to work with React features.

## **Commonly Used Hooks**

1. **useState**

 Adds state to your functional components.

 \`\`\`javascript
 const [count, setCount] = useState(0);
 \`\`\`

2. **useEffect**

 Handles side effects, replacing lifecycle methods like \`componentDidMount\`.

 \`\`\`javascript
 useEffect(() => {
   document.title = \`You clicked \${count} times\`;
 }, [count]);
 \`\`\`

3. **useContext**

 Accesses React context without the hassle of wrapping your component.

 \`\`\`javascript
 const value = useContext(MyContext);
 \`\`\`

## **Building Custom Hooks**

Custom Hooks are your friend for reusing component logic.

\`\`\`javascript
function useFetch(url) {
const [data, setData] = useState(null);

useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(setData);
}, [url]);

return data;
}
\`\`\`

## **Best Practices**

- **Rule of Hooks**: Only call Hooks at the top level and from React functions.
- **Dependencies**: Always specify dependencies in \`useEffect\` to avoid unexpected behaviors.
- **Performance**: Use \`useMemo\` and \`useCallback\` to memoize expensive calculations.

## **Conclusion**

React Hooks make your code cleaner and more maintainable. Embrace them, and you'll build more efficient React components with ease.

**Stay tuned** for [my next post](/post/3) on **web scraping with Puppeteer**!

Peace out,

**Jeremiah**
      `,
      image: blog002Img
  },
  {
      id: 3,
      title: "Automating Web Scraping with Puppeteer",
      date: "November 22, 2024",
      excerpt: "Learn how to use Puppeteer for efficient web scraping and automation tasks.",
      content: `
# Automating Web Scraping with Puppeteer

**Date:** November 24, 2024

**Excerpt:** Learn how to use Puppeteer for efficient web scraping and automation tasks.

![Blog Image](/images/blog003.jpg)

**Introduction**

Need to scrape some websites or automate browser tasks? **Puppeteer** is your go-to tool. Let's dive in.

## **Why Puppeteer?**

- **Headless Browsing**: Automate without a UI.
- **Full Browser Control**: Simulate clicks, form submissions, you name it.
- **Handles Dynamic Content**: Perfect for Single Page Applications (SPAs).

## **Getting Started**

### **Installation**

\`\`\`bash
npm install puppeteer
\`\`\`

### **Basic Usage**

\`\`\`javascript
const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://example.com');

// Perform actions
const data = await page.evaluate(() => {
  return document.querySelector('h1').innerText;
});

console.log(data);

await browser.close();
})();
\`\`\`

## **Advanced Techniques**

- **Handling Authentication**

\`\`\`javascript
await page.authenticate({ username: 'user', password: 'pass' });
\`\`\`

- **Dealing with Dynamic Content**

\`\`\`javascript
await page.waitForSelector('#dynamic-content');
\`\`\`

- **Taking Screenshots**

\`\`\`javascript
await page.screenshot({ path: 'screenshot.png' });
\`\`\`

## **Ethical Considerations**

- **Respect Robots.txt**: Always check the site's robots.txt.
- **Rate Limiting**: Don't hammer the server with requests.
- **Legal Compliance**: Make sure you're not breaking any laws or terms of service.

## **Conclusion**

Puppeteer makes web scraping and browser automation a breeze. Whether you're collecting data or testing web apps, it's a powerful tool to have in your arsenal.

**Next up**, [we'll explore](/post/4) **building APIs with Express.js**.

Happy Scraping!

**Jeremiah**
      `,
      image: blog003Img
  },
  {
      id: 4,
      title: "Building Robust APIs with Express.js",
      date: "November 22, 2024",
      excerpt: "An introduction to Express.js for creating scalable and efficient web applications.",
      content: `
# Building Robust APIs with Express.js

**Date:** November 25, 2024

**Excerpt:** An introduction to Express.js for creating scalable and efficient web applications.

![Blog Image](/images/blog4.jpg)

**Introduction**

Alright, let's talk **Express.js**. It's a minimalistic framework for Node.js that makes building web apps and APIs super straightforward.

## **Getting Started**

### **Installation**

\`\`\`bash
npm install express
\`\`\`

### **Basic Server Setup**

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
\`\`\`

## **Routing**

Express uses routing methods to define endpoints.

\`\`\`javascript
app.post('/user', (req, res) => {
// Handle POST request
});
\`\`\`

## **Middleware**

Middleware functions have access to the request and response objects.

\`\`\`javascript
app.use((req, res, next) => {
console.log('Time:', Date.now());
next();
});
\`\`\`

## **Building a RESTful API**

\`\`\`javascript
const users = [];

app.get('/users', (req, res) => {
res.json(users);
});

app.post('/users', (req, res) => {
users.push(req.body);
res.status(201).json(req.body);
});
\`\`\`

## **Error Handling**

\`\`\`javascript
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});
\`\`\`

## **Security Best Practices**

- **Helmet Middleware**: Secures your app by setting various HTTP headers.

\`\`\`javascript
const helmet = require('helmet');
app.use(helmet());
\`\`\`

- **Input Validation**: Always validate and sanitize user input.

## **Performance Optimization**

- **Compression**: Use gzip to reduce response sizes.

\`\`\`javascript
const compression = require('compression');
app.use(compression());
\`\`\`

- **Caching**: Implement caching strategies to boost performance.

## **Conclusion**

Express.js is a powerhouse for building scalable and efficient web applications. Its simplicity and flexibility make it a favorite among developers, whether you're just starting or are a seasoned pro.

In my next post, [we'll dive into](/post/5) **styling with Tailwind CSS**.

Keep Coding!

**Jeremiah**
      `,
      image: blog004Img
  },
];

export default blogPosts;