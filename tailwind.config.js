/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-2': 'rgb(var(--color-primary-2) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-2': 'rgb(var(--color-secondary-2) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
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
  },
  safelist: [
    {
      pattern:
        /(.+)-(foreground|background|highlight|primary|secondary|secondary-2|danger)/,
    },
  ],
  plugins: [],
};
