const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
      },
      boxShadow: {
        mat: 'var(--box-shadow-mat)',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
        9: '9px',
        10: '10px',
      },
    },
    screens: {
      'phone-only': { max: '599px' },
      'tablet-portrait-up': '600px',
      'tablet-landscape-up': '1025px',
      'desktop-up': '1200px',
      'big-desktop-up': '1800px',
    },
    fontFamily: {
      montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      marcellus: ['var(--font-marcellus)', ...fontFamily.sans],
    },
  },
  safelist: [
    {
      pattern: /(.+)-(foreground|background|primary|secondary)/,
    },
  ],
  plugins: [],
};
