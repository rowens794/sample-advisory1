const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   Rampart: ['Rampart One', 'cursive'],
      // },
    },
    colors: {
      // Colors you want to add go here
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.emerald,
      gray: colors.zinc,
      white: colors.white,
      yellow: colors.yellow,
      red: colors.red,
    },
    screens: {
      xs: '479px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
