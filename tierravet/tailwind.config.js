/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#E1FAEF',
        secondary: '#AFCFBF',
        tertiary: '#C0C0C0'
      },
    },
  },
  plugins: [],
}

