/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "200px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        "fredoka-one": ['"Fredoka One"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      backgroundImage: {
        bgPhoto: "url('/bg.jpg')",
      },
      backgroundColor: {
        apricot: "#b300b3",
      },
      boxShadow: {
        card: "inset 0px 0px 5px 3px rgba(129, 0, 129, 1)",
      },
      colors: {
        ownBlue: "rgba(224, 157, 11, 1)",
      },
      borderColor: {
        apricot: "#b300b3",
      },
      textColor: {
        "favorite-purple": "#531752",
      },
    },
  },
  plugins: [],
};
