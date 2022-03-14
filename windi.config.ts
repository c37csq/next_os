import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    colors: {
      white: '#FFFFFF',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fontSize: {
      '14': '1.4rem',
      '15': '1.5rem',
      '16': '1.6rem',
      '17': '1.7rem',
      '18': '1.8rem',
      '19': '1.9rem',
      '24': '2.4rem',
    },
    textColor: {
      '#3995D4': '#3995D4',
    },
  },
});
