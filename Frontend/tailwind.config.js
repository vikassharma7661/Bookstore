/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Matches all JavaScript/TypeScript files

  ],
  darkMode: 'class'
  ,
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
  daisyui: {
    themes: false,
  },
}
