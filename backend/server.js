const express = require('express');
const cors = require('cors');
const scrapeEvents = require('./scraper');
const cron = require('node-cron');

const app = express();
app.use(cors());

// Cache for events
let cachedEvents = [];

// Immediate first scrape
updateEvents();

// Schedule hourly updates
cron.schedule('0 * * * *', updateEvents); // Runs at minute 0 of every hour

async function updateEvents() {
  try {
    console.log('Scraping events...');
    cachedEvents = await scrapeEvents();
    console.log(`Found ${cachedEvents.length} events`);
  } catch (error) {
    console.error('Auto-scrape failed:', error);
  }
}

app.get('/api/events', (req, res) => {
  res.json(cachedEvents);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Endpoint: http://localhost:${PORT}/api/events`);
});