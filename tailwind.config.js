/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },

    container: {
      center: "true",
    },
    extend: {

      animation: {
        blob: "blob 7s infinite",
      },

      keyframes: {
        blob: {
          "0": {transform: "translate(0px, 0px) scale(1)"},
          "33%": {transform: "translate(30px, -50px) scale(1.1)"},
          "66%": {transform: "translate(-20px, 20px) scale(0.9)"},
          "100%": {transform: "translate(0px, 0px) scale(1)"},
        },
      },
    },
  },
  plugins: [],
}
