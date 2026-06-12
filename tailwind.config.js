/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        mono: ['monospace'],
      },
      colors: {
        brand: {
          pink: '#DE2A72',
          dark: '#051A24',
          darker: '#0D212C',
          muted: '#273C46',
          light: '#F6FCFF',
        }
      },
      boxShadow: {
        /* Complex multi-layered shadows engineered for depth */
        'premium-pink': '0 1px 2px 0 rgba(222,42,114,0.1), 0 4px 4px 0 rgba(222,42,114,0.09), 0 9px 6px 0 rgba(222,42,114,0.05), 0 17px 7px 0 rgba(222,42,114,0.01), 0 26px 7px 0 rgba(222,42,114,0), inset 0 2px 8px 0 rgba(255,255,255,0.4)',
        'premium-dark': '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.15)',
        'premium-white': '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-mobile': 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
