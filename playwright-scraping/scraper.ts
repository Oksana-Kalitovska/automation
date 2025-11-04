const playwright = require('playwright');
const randomUseragent = require('random-useragent');
const fs = require('fs'); // Import fs module to handle file operations

const BASE_URL = 'https://github.com/topics/playwright';

(async () => {
 // Generate a random user agent
 const agent = randomUseragent.getRandom();

  // Setup browser and context
  const browser = await playwright.chromium.launch({headless: true}); // Set headless to false if you want to see the browser
  const context = await browser.newContext({userAgent: agent}); // Create a new browser context
  const page = await context.newPage({bypassCSP: true}); // Create a new page with CSP bypass
  await page.setDefaultTimeout(30000); // Set default timeout to 60 seconds
  await page.setViewportSize({width: 1280, height: 800}); // Set viewport size
  await page.goto(BASE_URL); // Navigate to the base URL
  console.log(agent);
 // Get data from the page
 const repositories = await page.$$eval('article.border', (repoCards) => {
  return repoCards.map(function(card) {
    const [user, repo]  = card.querySelectorAll('h3 a');
    const formatText = (element) => element ? element.textContent.trim() : '';
    return {
      user: formatText(user),
      repo: formatText(repo),
      url: repo ? (repo.getAttribute ? repo.getAttribute('href') : '') : ''
    };
  });
});

 // Store data in the file
const logger = fs.createWriteStream('data.txt', {flag: 'w'}); // Create a write stream
logger.write(JSON.stringify(repositories, null, '')); // export data to file


 // Close browser
  await browser.close(); // important thing

})().catch((error) => {
  console.error('Error during scraping:', error);
  process.exit(1);
});