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

    fontFamily: {
      lso: ["Lily Script One", "system-ui"],
      montserrat: ["Montserrat"],

    },

    colors: {
      "primary": "#fff",
      "secondary": "#000",
      "tertiary1":"#323232",
      "tertiary2": "#FCFAFD",
      "simple1": "#fd6905"
      
      
  
    },
    
    backgroundImage: theme => ({
      'img1': "url('url../src/assets/p-necklace.png')",
      'img2': "url('url../src/assets/bbb.png')",
      'img3': "url('url../src/assets/Orangefit.png')",
      'img4': "url('url../src/assets/faceless.png')",

    }),


  
  },
  plugins: [],
};

