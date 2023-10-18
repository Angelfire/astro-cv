/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      sm: "768px",
      md: "768px",
      lg: "768px",
      xl: "768px",
      "2xl": "768px",
    },
  },
  plugins: [],
}
