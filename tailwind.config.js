/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'phone-only': { max: '599px' },
      'tablet-portrait-up': '600px',
      'tablet-landscape-up': '1025px',
      'desktop-up': '1200px',
      'big-desktop-up': '1800px',
    },
  },
  plugins: [],
};
