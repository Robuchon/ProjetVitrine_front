const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'corePattern': "url('@assets/img/bgCore.png')",
        'corePattern2': "url('@assets/img/bgCore2.png')",
        'parchemin': "url('@assets/img/parchemin.png')",
      }
    },
    fontFamily: {
      sans: ["Luminari", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss")
  ],
};
