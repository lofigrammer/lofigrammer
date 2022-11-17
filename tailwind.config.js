/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fredoka-one": ['"Fredoka One"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      backgroundImage: {
        bgPhoto: "url('/bg.jpg')",
      },
      backgroundColor: {
        apricot: "rgba(224, 157, 11, 1)",
      },
      boxShadow: {
        card: "inset 0px 0px 13px 4px rgba(175, 117, 4, 1)",
      },
      colors: {
        ownBlue: "rgba(224, 157, 11, 1)",
      },
      borderColor: {
        apricot: "rgba(224, 157, 11, 1)",
      },
      textColor: {
        "favorite-purple": "#531752",
      },
    },
  },
  plugins: [],
};
