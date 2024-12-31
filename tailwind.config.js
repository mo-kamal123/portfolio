/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filters: {
        'grayscale': 'grayscale(10%)',
      },
    },
  },
  plugins: [],
}