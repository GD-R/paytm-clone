/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        "primary": "#00baf2",
        "secondary": "#002970",
        "light": "#66d6ff",
      },
    },
  },
  plugins: [],
}
