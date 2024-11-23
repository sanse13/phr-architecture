/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        koliko: ["Koliko", "sans-serif"],
      },
    },
    colors: {
      primary: "#a33e4b",
    },
  },
  plugins: [require("flowbite/plugin")],
};
