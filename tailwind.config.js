const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        target: "url('/public/images/target.png')",
      },
    },

    fontFamily: {
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
