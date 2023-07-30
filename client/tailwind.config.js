/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-gray": "#E6EBF2",
        "pastel-yellow": "#FBD180",
        "pastel-mint": "#81BAB4",
        "pastel-dark-blue": "#32324D",
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
