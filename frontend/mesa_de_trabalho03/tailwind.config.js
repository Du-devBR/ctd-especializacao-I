/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        danger: "#e74c3c",
        sucess: "#27ae60",
        background: "#050915",
        colorInput: "#00081D",
        colorTxt: "#ffffff",
        bgBtn: "#1A2EDF",
        bgBtnHover: "#5867c4"
      },
    },
  },
  plugins: [],
}