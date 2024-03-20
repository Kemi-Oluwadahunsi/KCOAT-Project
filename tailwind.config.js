/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#FCFAFD",
      secondary: "#F2E29F",
      tertiary: "#0C323A",
      bland: "#000",
      color: "#323232",
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1536px",
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};

