/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
=======
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
>>>>>>> 7d604184f74ec39bd57d7a8b03d9bdd7ff214b66
  theme: {
    extend: {
      colors: {
        start: '#000 0%',
        customTeal: '#51C4E8 350%',
        buttons: '#33A09A'
      },
      fontFamily: {
<<<<<<< HEAD
        poppins: ['Poppins']
=======
        poppins: ['Poppins'],
        ubuntu: ['Ubuntu']
>>>>>>> 7d604184f74ec39bd57d7a8b03d9bdd7ff214b66
      }
    },
  },
  plugins: [],
}

