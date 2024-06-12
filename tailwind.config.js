const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,css,js}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.75rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      fontFamily: {
        'sans': ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Noto Sans", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji"]
      },
      colors: {
          'sunlight': {
              '100': '#541D0C',
              '200': '#722B16',
              '300': '#9F391A',
              '400': '#C64922',
              '500': '#DF5F38',
              '600': '#EA7855',
              '700': '#F69B7F',
              '800': '#FCD1C4',
              '900': '#FEF4F0',
          },
          'sunlight-gray': {
              '100': '#2B2625',
              '200': '#473C39',
              '300': '#64534E',
              '400': '#776864',
              '500': '#918886',
              '600': '#B6AAA7',
              '700': '#CEC8C7',
              '800': '#E5E2E1',
              '900': '#F3F2F2',
          },
      },
      transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    require('daisyui'),
  ],
}