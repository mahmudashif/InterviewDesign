/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "#FD6F00"
      }
    },
  },
  plugins: [],
}