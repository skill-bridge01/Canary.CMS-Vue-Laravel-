/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FFFF00",
          light: "#FEF6C5",
          dark: "#FF931E",
        },
      },
      boxShadow: {
        "3xl": "0px 3px 10px 0px rgba(0, 0, 0, 0.0784)",
        "4xl": "0px 10px 15px 0px rgba(0, 0, 0, 0.0784)",
        form: "0px 8px 15px 4px rgba(0, 0, 0, 0.0784)",
        library: "0px 3px 10px 0px rgba(0, 0, 0, 0.102)",
        post:"0px 3px 3px 0px rgba(0, 0, 0, 0.1608)",
        article:"0px 3px 7.5px 0px rgba(0, 0, 0, 0.0784)",
        fullArticle:"0px 3px 6.5px 0px rgba(0, 0, 0, 0.102)"
      },
      dropShadow: {
        "3xl": "0px 3px 10px 0px rgba(0, 0, 0, 0.0784)",
      },
      borderRadius: {
        'l0': '10px',
        'normal': '10px',
      },
    },
  },
  plugins: [],
};
