/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Matches all JavaScript/TypeScript files
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use ESM import instead of require
  ],
  daisyui: {
    themes: false,
  },
};
