/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      outline: {
        focus: ["1px solid #949494", "1px"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#FCFAFD",
      secondary: "#404040",
      tertiary: "#FD6905",
      bland: "#000",
      color: "#323232",
      background: "#fd690517",
      subtext: "#666666",
      border: "#DEDFE1",
      createaccount: "#949494",
      password: "#282828",
      secondary2: "#000",
      tertiary1: "#323232",
      tertiary2: "#FCFAFD",
      simple1: "#fd6905",
      feedback: "rgba(253, 105, 5, 0.09)",
      categoryborder: "#2D2D2D",
      categoryborder2: "#E2E2E2",
      nextpage: "#DFDFDF",
      tertiary3: "#3D3D3D",
      tertiary4: "#666",
      minus: "#D7D7D7",
      plus: "#414141",
      cartborder: "rgba(253, 105, 5, 0.30)",
      hr: "#DDDDDD",
      stats: "#262626",
      delete: "#D91F06",
    },
    screens: {
      'xs': {'max': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'sm': {'min': '481px', 'max': '800px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'md': {'min': '801px', 'max': '1200px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'lg': {'min': '1201px', 'max': '2500px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
      tertiary: ["Lily Script One", "sans-serif"],
      oxygen: ["Oxygen", "sans-serif"],
      lso: ["Lily Script One", "system-ui"],
      montserrat: ["Montserrat"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};

