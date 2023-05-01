// const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const brandColor = colors.indigo

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: brandColor,
        ployBlue: '#101530',
        brandBg: '#01061B',
        brandBgDark: '#010515',
        brandNavBg: '#010516',
      },
      keyframes: {
        'marquee-left': {
          from: {
            transform: 'translateX(var(--marquee-start))',
          },
          to: {
            transform: 'translateX(var(--marquee-end))',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'marquee-left': 'marquee-left var(--marquee-duration) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        6000: '6000ms',
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
