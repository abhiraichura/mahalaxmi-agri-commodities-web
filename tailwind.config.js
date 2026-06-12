/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#ed1879',
          gold: '#c9a227',
          dark: '#1a1a1a',
          light: '#fafafa',
        }
      },
      boxShadow: {
        'pink-glow': '0 10px 30px -10px rgba(237, 24, 121, 0.3)',
      }
    },
  },
  plugins: [],
};
