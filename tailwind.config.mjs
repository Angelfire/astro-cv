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
      sm: "720px",
      md: "720px",
      lg: "720px",
      xl: "720px",
      "2xl": "720px",
    },
  },
  plugins: [],
}
