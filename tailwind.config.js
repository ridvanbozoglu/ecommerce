/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'light-drop': '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}