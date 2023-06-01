/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    colors: {
      danger: "#FF6B6B",
      sucess: "#1DD170",
      primaryColor: "#410094",
      primaryGray: "#D9D9D9",
      bgBtnHover: "#6D1BD7"
    },
  },
},
  plugins: [],
}
