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
      bgBlue: '#102766',
      // danger: "#FF6B6B",
      // sucess: "#1DD170",
      // primaryColor: "#F9CA24",
      txtBlackColor: "#343434",
      // txtBlackColor2: "#353535",
      // grayColor: "#F5F5F5",
      // secondGray: "#D9D9D9",
      // primaryGray: "#D1D1D1",
      // bgBtnHover: "#FFC700",
      // placeholderColor: "#767676"
    },
  },
},
  plugins: [],
}
