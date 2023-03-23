/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-header": "calc(100vh - 4rem)",
      },
      dropShadow: {
        retro: "8px 8px 0px rgba(0, 0, 0, 1)",
      },
      keyframes: {
        star: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "spin-slow": "spin 120s linear infinite",
        "star-pulse": "star 1s linear infinite",
      },
      fontFamily: {
        Jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        "Special-Elite": ['"Special Elite"', "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
