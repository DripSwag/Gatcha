/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': "url('/src/assetts/home.jpg')",
        'roll': "url('/src/assetts/roll.jpg')",
      }
    },
  },
  plugins: [],
}
