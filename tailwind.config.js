/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#1E90FF",
          lowRed: "#BE9292",
          yellow: "#F4D03F",
          lowBlack: "#2E4057",
          lowOrange: "#FDECEC",
          lowBrown: "#A3ABB6",
          lowGray: "#F9FBFC",
          lowWhite: "#f2eded",

        },
      },
      fontFamily: {
        lekton: ["Lekton"],
      },
      screens: {
        smx: { max: "930px" }, // Small screens (up to 767px)
        mdx: { max: "1025px" }, // Medium screens (up to 1023px)
        lgx: { max: "1290px" }, // Large screens (up to 1279px)
        smmxs: { max: "500px" }, //Screens for up to 400px
        smxx: { max: "300px" }, // Screen for Galaxy Fold
      },
    },
  },
  plugins: [],
};
