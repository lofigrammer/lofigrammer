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
        apricot: "#6c71c4",
      },
      boxShadow: {
        card: "inset 0px 0px 5px 3px #595ead",
      },
      colors: {
        ownBlue: "rgba(224, 157, 11, 1)",
      },
      borderColor: {
        apricot: "#6c71c4",
      },
      textColor: {
        base3: "#fdf6e3",
      },
    },
  },
  plugins: [],
};
