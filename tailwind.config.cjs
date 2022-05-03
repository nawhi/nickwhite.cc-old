const colors = require('tailwindcss/colors');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        'th-background': 'var(--th-background)',
        'th-primary': 'var(--th-primary)',
        'th-secondary': 'var(--th-secondary)',
        'th-tertiary': 'var(--th-tertiary)',
        'th-subtle': 'var(--th-subtle)',
        'th-action': 'var(--th-action)',
        'th-action-focus': 'var(--th-action-focus)',
        'th-error': 'var(--th-error)'
      }
    }
  },
  darkMode: 'media',

  plugins: []
};

module.exports = config;
