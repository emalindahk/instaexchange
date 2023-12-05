/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "new-black": "#110b0b",
        "pixel-blue": "#54b8f5",
        smoke: "#b3bbca",
        "darker-gray": "#383b40",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

