/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        start: '#000 0%',
        customTeal: '#51C4E8 350%',
        buttons: '#33A09A',
        background: '#141313',
        primaryFont: '#46B5D8',
        secondaryFont: '#DFDFDF',
      },
      fontFamily: {
        poppins: ['Poppins'],
        ubuntu: ['Ubuntu'],
        mulish:['"Mulish", sans-serif;'],
      },
    },
  },
  plugins: [],
}

