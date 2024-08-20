/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#f5f5f5"
        },
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
  presets: [require("nativewind/preset")],
}

