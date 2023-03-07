/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: { brand: "#D87D4A", "brand-light": "#FBAF85" },
      gridTemplateColumns: { "2/1": "2fr 1fr", "3/1": "3fr 1fr" },
    },
  },
  plugins: [],
};
