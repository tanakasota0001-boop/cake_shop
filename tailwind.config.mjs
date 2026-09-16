/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#fbf9f4',
          200: '#f6f3eb',
          300: '#eee9dd',
          400: '#dfd7c4',
          500: '#c8bba3',
          900: '#2b2620',
        },
        gold: {
          300: '#e6ca85',
          400: '#d4af37',
          500: '#c59b27',
          600: '#a37b19',
        },
        noir: {
          800: '#222120',
          900: '#181716',
          950: '#0e0d0d',
        },
        berry: {
          700: '#8c2438',
          800: '#6f1929',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        sans: ['"Cinzel"', '"Montserrat"', '"Hiragino Sans"', 'sans-serif'],
        display: ['"Playfair Display"', '"Shippori Mincho"', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '.25em',
        'mega-wide': '.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
