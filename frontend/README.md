# SYDNEY EVENTS EXPLORER

🔗 Live Links
Frontend: https://event-scraper-csbd-ltt85r4lb-nigamidea-gmailcoms-projects.vercel.app/

Backend API: https://event-scraper-760g.onrender.com

## 📦 Project Structure
backend/
├── scraper.js # Puppeteer scraping logic (with cloud deployment fixes)
├── server.js # Express API (port 3001)
└── package.json # Includes @sparticuz/chromium for Render compatibility

frontend/
├── src/
│ ├── App.jsx # Connected to live API with fallback mock data
│ ├── main.jsx # Vite entry point
│ └── index.css # Tailwind imports
├── .env # VITE_API_URL configured for production
└── package.json


## 🚀 Installation
```bash
# Backend (requires Node.js 18+)
cd backend
npm install
node server.js  # API runs on http://localhost:3001

# Frontend
cd frontend
npm install
npm run dev  # App runs on http://localhost:5173

🌟 Achieved Features:

Feature	Status	Notes
Live Event Scraping	✅ Partial	Works locally, cloud deployment requires Render Pro tier
Responsive UI	      ✅ Complete	Tailwind-powered mobile/desktop views
Email Validation	   ✅ Complete	Regex validation with disabled states
API Integration	   ✅ Complete	Falls back to mock data if API fails
Deployment	         ⚠️ Partial	Frontend on Vercel, backend on Render (free tier limitations)

⚠️ Known Limitations
Render Free Tier Constraints:

Puppeteer requires Pro tier for reliable Chromium execution

Backend sleeps after inactivity (50s+ cold starts)

Scraper Fallback Behavior:

javascript"
// Currently returns mock data if scraping fails
return events.length > 0 ? events : mockData;
Environment Variables:

Requires manual setup for:

VITE_API_URL (Frontend)

PUPPETEER_EXECUTABLE_PATH (Backend)

🔧 Technical Stack
Component	Technology	Version
Frontend	React + Vite	18.x
Styling	Tailwind CSS	4.1
Backend	Express.js	4.x
Scraping	Puppeteer	22.x (+stealth plugin)

🎨 UI Specifications
color-palette
Primary: #1d1d1f (Apple Black)
Secondary: #f5f5f7 (Light Gray)
Text: #86868b (Gray)

📝 Submission Notes
What Works:

Full frontend functionality with mock data

Backend API structure ready for scaling

Responsive design across devices

Areas for Improvement:

Upgrade Render tier for consistent scraping

Add MongoDB for event persistence

Implement retry logic for failed scrapes

Key Learnings:

Cloud deployment challenges with Puppeteer

Importance of fallback mechanisms

Environment variable management


