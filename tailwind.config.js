/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#ed1879',
          'pink-dark': '#c7156b',
          gold: '#c9a227',
          'gold-light': '#e8d5a3',
        }
      },
      maxWidth: {
        'content': '1440px',
      }
    },
  },
  plugins: [],
}