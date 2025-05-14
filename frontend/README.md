# SYDNEY EVENTS EXPLORER DOCUMENTATION

=== PROJECT STRUCTURE ===
backend/
├── scraper.js       # Puppeteer scraping logic
├── server.js        # Express API (port 3001)
└── package.json

frontend/
├── src/
│   ├── App.jsx      # Main UI component
│   ├── main.jsx     # Vite entry point
│   └── index.css    # Tailwind imports
├── tailwind.config.js
├── vite.config.js
└── package.json

=== INSTALLATION ===
1. BACKEND:
   cd backend
   npm install
   node server.js

2. FRONTEND:
   cd frontend
   npm install
   npm run dev

=== TECHNICAL SPECS ===
- React 18 + Vite
- Tailwind CSS 4.1
- Express 4.x
- Puppeteer 22.x

=== KEY FEATURES ===
1. Apple-inspired UI:
   - 1d1d1f (Black)
   - f5f5f7 (Light Gray)
   - 86868b (Text Gray)

2. Responsive Components:
   - Mobile: 1 column
   - Desktop: 2 columns

3. Email Validation:
   - Requires @ symbol
   - Disables submit button when invalid
