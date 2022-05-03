const colors = require('tailwindcss/colors');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        xs: '480px'
      }
    },
    colors: {
      background: 'var(--background)',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      tertiary: 'var(--tertiary)',
      subtle: 'var(--subtle)',
      error: 'var(--error)'
    }
  },
  darkMode: 'media',

  plugins: []
};

module.exports = config;
