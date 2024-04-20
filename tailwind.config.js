/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},

    colors: {
      'hubx-grey': '#F5F5F7',
      white: '#FFFF',
      red: 'red',
      black: '#000000',
      'dark-black': '#0B122A',
      'icon-border': '#00000014',
      blue: '#0381FF',
      'hover-color': '#0381FF10',
      'dark-blue': '#0381FF',
    },
  },
  plugins: [],
};
