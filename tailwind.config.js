const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: colors.red,
    //   // secondary: colors.emerald,
    //   // gray: colors.gray,
    //   // white: colors.white,
    //   transparent: "transparent",
    //   current: "currentColor",
    // },
    extend: {
      colors: {
        primary: "#AD3278",
        textGradient: "#FFE332",
        ctaBackgroundColor: "#3F0F40",
        footerBacgroundColor: "#2B052C",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
