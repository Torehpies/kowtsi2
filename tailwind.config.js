/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*/components/**/*.{js,vue,ts}",
    "*/layouts/**/*.vue",
    "*/views/**/*.vue",
    "*/pages/**/*.vue",
    "*/plugins/**/*.{js,ts}",
    "*/app.vue",
    "*/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#783522',
        'brown': '#CE7D50',
        'latte': '#FFF7E4',
      },
    },
  },
  plugins: [],
}

