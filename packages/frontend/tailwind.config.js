/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'body': '#292524',
        'body-text': '#FFF'
      },
      screens: {
        'mobile': {
          max: '768px'
        }
      }
    },
  },
  plugins: [],
}
