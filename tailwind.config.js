/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], 
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
    fontFamily: {
      'cedarville': ['Cedarville Cursive', 'cursive','sans-serif'],
      'josenfin': ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
}