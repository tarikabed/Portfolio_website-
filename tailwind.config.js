/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'plex': ['IBM Plex Sans', 'sans-serif'] // Ensure you've added the font correctly in your CSS
    }},
  },
 
  plugins: [],
}

