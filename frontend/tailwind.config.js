export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple's official grayscale
        'apple-black': '#1d1d1f',
        'apple-gray-1': '#f5f5f7',
        'apple-gray-2': '#e5e5e5',
        'apple-gray-3': '#d2d2d7',
        'apple-gray-4': '#86868b',
        'apple-gray-5': '#424245',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    }
  }
}