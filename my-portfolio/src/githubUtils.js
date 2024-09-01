const GITHUB_API_URL = 'https://api.github.com/repos/';

export const fetchProjectDetails = async (repo) => {
    try {
        const response = await fetch(`${GITHUB_API_URL}${repo}`);
        if (!response.ok) {
            throw new Error(`Error fetching repository data: ${response.statusText}`);
        }
        const data = await response.json();

        // Extract description and README content
        const description = data.description || 'No description available';
        const readmeResponse = await fetch(`${GITHUB_API_URL}${repo}/readme`, {
            headers: { Accept: 'application/vnd.github.v3.raw' }
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
