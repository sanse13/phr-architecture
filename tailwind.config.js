/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        koliko: ["Koliko", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      primary: "#a33e4b",
    },
    keyframes: {
      slideInRight: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      slideInLeft: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      slideInRight: "slideInRight 0.5s ease-out",
      slideInLeft: "slideInLeft 0.5s ease-out",
    },
  },
  plugins: [require("flowbite/plugin")],
};
