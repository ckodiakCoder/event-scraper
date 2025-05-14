const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeEvents() {
  const mockData = [
    {
      title: "Sydney Music Festival (Sample)",
      date: "2025-05-20",
      link: "#"
    },
    {
      title: "Tech Conference (Sample)",
      date: "2025-05-22",
      link: "#"
    }
  ];

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Disable images/styles for faster loading
    await page.setRequestInterception(true);
    page.on('request', req => {
      ['image', 'stylesheet', 'font'].includes(req.resourceType()) 
        ? req.abort() 
        : req.continue();
    });

    // Target City of Sydney events (more reliable)
    await page.goto('https://whatson.cityofsydney.nsw.gov.au', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Scroll to trigger lazy-loading
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= 2000) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    const events = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.event-card')).map(card => ({
        title: card.querySelector('h3')?.innerText.trim() || 'Untitled Event',
        date: card.querySelector('.date')?.innerText.trim() || 'Coming Soon',
        link: card.querySelector('a')?.href || '#'
      }));
    });

    await browser.close();
    return events.length > 0 ? events.slice(0, 5) : mockData;

  } catch (error) {
    console.error('Scraping failed:', error.message);
    return mockData;
  }
}

module.exports = scrapeEvents;