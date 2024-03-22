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
      test: "#0C323A",
      background: "#fd690517",
      subtext: "#666666",
      border: "#DEDFE1",
      createaccount: "#949494",
      password: "#282828",
      primary: "#fff",
      secondary: "#000",
      tertiary1:"#323232",
      tertiary2: "#FCFAFD",
      simple1: "#fd6905",
      feedback : "rgba(253, 105, 5, 0.09)"
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
    
    backgroundImage: theme => ({
      'img1': "url('url../src/assets/p-necklace.png')",
      'img2': "url('url../src/assets/bbb.png')",
      'img3': "url('url../src/assets/Orangefit.png')",
      'img4': "url('url../src/assets/faceless.png')",

    }),
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
      tertiary: ["Lily Script One", "sans-serif"],
      oxygen: ["Oxygen", "sans-serif"],
        lso: ["Lily Script One", "system-ui"],
      montserrat: ["Montserrat"],
    },
  },
  plugins: [],
};

