/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "change-card": {
          "70%": {
            transform: "translate(0%) scale(0.85)",
            zIndex: 10,
          },
          "50%": {
            transform: "translate(+130%) scale(0.85)",
            animationTimingFunction: "ease-in",
          },
        },
        "elevate-card": {
          "0%": {},
        },
      },
      animation: {
        "spin-slow": "spin 120s linear infinite",
        "change-card": "change-card 1s  ease-in-out",
        "elevate-card": "elevate-card 1s  ease-in-out",
      },
      fontFamily: {
        Jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        "Special-Elite": ['"Special Elite"', "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
