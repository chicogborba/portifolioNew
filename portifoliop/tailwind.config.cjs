/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        "Special-Elite": ['"Special Elite"', "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
