/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../core/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-2': 'rgb(var(--color-primary-2) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-2': 'rgb(var(--color-secondary-2) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
      },
      boxShadow: {
        mat: 'var(--box-shadow-mat)',
      },
      fontSize: {
        h1: '5.25rem',
        xxs: '0.5rem',
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
  },
  safelist: [
    {
      pattern:
        /(.+)-(foreground|highlight|primary|secondary|secondary-2|danger|light|dark)/,
    },
  ],
  plugins: [],
};
