module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: false,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'wood-blue': '#0652C5',
        'wood-pink': '#D4418E'
      },
    },
    screens: {
      'sm': '350px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
