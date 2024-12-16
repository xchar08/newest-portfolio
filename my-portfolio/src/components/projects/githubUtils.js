// githubUtils.js

const GITHUB_API_URL = 'https://api.github.com/repos/';

export const fetchProjectDetails = async (repo) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}${repo}`);
    if (!response.ok) {
      throw new Error(`Error fetching repository data: ${response.statusText}`);
    }
    const data = await response.json();

    // Extract description
    const description = data.description || 'No description available';

    // Fetch README
    const readmeResponse = await fetch(`${GITHUB_API_URL}${repo}/readme`, {
      headers: { Accept: 'application/vnd.github.v3.raw' },
    });
    if (!readmeResponse.ok) {
      throw new Error(`Error fetching README data: ${readmeResponse.statusText}`);
    }
    const readmeContent = await readmeResponse.text();

    return { description, readmeContent };
  } catch (error) {
    console.error('Error fetching project details:', error);
    return { description: 'Error fetching description', readmeContent: 'Error fetching README content' };
  }
};

export const fetchProjectLanguages = async (repo) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}${repo}/languages`);
    if (!response.ok) {
      throw new Error(`Error fetching languages: ${response.statusText}`);
    }
    const data = await response.json(); // { "Python": 1234, "HTML": 567, ...}
    const languages = Object.keys(data); // e.g. ["Python", "HTML"]
    return languages;
  } catch (err) {
    console.error('Error fetching project languages:', err);
    return [];
  }
};
