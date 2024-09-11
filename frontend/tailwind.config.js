/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'buttonFocus': "0 0 0px 2px #000, 0 0 0 4px #8b5cf6"
      }
    },
  },
  plugins: [],
}