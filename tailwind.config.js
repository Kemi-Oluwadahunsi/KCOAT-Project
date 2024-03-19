/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1536px",
    },

    colors: {
      "primary": "#fff",
      "secondary": "#000",

    }
  },
  plugins: [],
};

