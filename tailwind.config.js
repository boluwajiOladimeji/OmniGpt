/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        deepDarkBlue: 'hsla(220, 38%, 11%, 1)',
        darkYellow: 'hsla(55, 100%, 50%, 1)',
        darkPurple: 'hsla(267, 62%, 53%, 1)',
        darkWhite: 'hsla(207, 100%, 98%, 1)',
        darkGreen: 'hsla(154, 73%, 45%, 1)',
        grayish: 'rgba(255,255,255,0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
};
