
const { platformSelect } = require('nativewind/dist/theme-functions')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'platform-color': platformSelect({
          ios: "green",
          android: "blue",
          default: "black"
        }),
        dark: {
          DEFAULT: '#1C1C1E',
        },
        'soft-dark': {
          DEFAULT: '#2A2A2F',
        },
      },
    },
  },
  plugins: [],
}

