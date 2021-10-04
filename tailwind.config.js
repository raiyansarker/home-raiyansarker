const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        violet: colors.violet,
      },
      fontFamily: {
        inter: ['"Inter"', 'Helvetica', 'sans-serif'],
        roboto: ['"Roboto"', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
