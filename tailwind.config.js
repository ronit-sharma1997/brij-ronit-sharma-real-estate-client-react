/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'playfair-display': ['"Playfair Display"', 'sans-serif'],
      'roboto-serif': ['"Roboto Serif"', 'sans-serif'],
      'style-script': ['"Style Script"', 'sans-serif'],
    },
    extend: {
      screens: { '3xl': '1600px', '4xl': '2200px' },
    },
  },
  plugins: [],
};
