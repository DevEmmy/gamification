/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary: "#2F855A"
      },
      screens: {
        'lt': { 'max' : '500px'},
        'sm': { 'max': "400px" },
        'sm1': { 'max': "840px" },
        'md': { 'max': "800px" },
        'md1': { 'max': "850px"},
        'lg': { 'min': "2300px" },
        'xl': { 'max': "1280px" },
        "2xl": { 'max': "1536px" },
      },
    },
  },
  plugins: [],
}

