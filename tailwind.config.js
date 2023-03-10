/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        green: '#42b883',
        'gray-dark': '#0f172a',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
