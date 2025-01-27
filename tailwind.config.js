/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans:["poppins","sans-serif"],
        handwritting:["Merienda", "cursive"],
      },
      container:{
        center: true,
        padding:{
         default: "1rem",
         sm:"2rem",
         lg:"3rem",
         xl:"4rem",
         "2xl":"5rem",
        }
      }
    },
  },
  plugins: [],
}