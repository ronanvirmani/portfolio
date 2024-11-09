/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#191919",
          "secondary": "#17181B",
          "accent": "#186e8c",
          "neutral": "#E9EBEE",
          "alt": "#656565",
        },
      },
    ],
  },
}

