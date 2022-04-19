const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  'content': ['./index.html'],
  'theme': {
    'extend': {
      'colors': {
        'primary': {
          '50': '#ccf7e0',
          '100': '#99efc1',
          '200': '#66e6a2',
          '300': '#33de83',
          '400': '#00d664',
          '500': '#00c15a',
          '600': '#009646',
          '700': '#006b32',
          '800': '#00401e',
          '900': '#00150a',
        },
      },
      'fontFamily': {
        'fira-mono': ['"Fira Mono"', ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
        'awesome': 'FontAwesome',
      },
      'transitionDuration': {
        'DEFAULT': '250ms',
      },
    },
  },
  'plugins': [],
};