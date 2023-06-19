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
          lowWhite: "#f2eded",
        },
      },
      fontFamily: {
        lekton: ["Lekton"],
      },
    },
  },
  plugins: [],
};
