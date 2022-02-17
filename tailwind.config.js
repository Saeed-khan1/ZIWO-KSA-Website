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
        paragraphGrayColor: "#8C8C8C",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      fontSize: {
        "7xl": ["1.4rem", { lineHeight: "2.4rem" }], // 22px
        "8xl": ["2.4rem", { lineHeight: "3.5rem" }], // 38px
        "9xl": ["3.5rem", { lineHeight: "4rem" }], // 56px
        "10xl": ["2.9rem", { lineHeight: "3.5rem" }], // 46px
        "11xl": ["1.9rem", { lineHeight: "2.5rem" }], // 30px
        // mediumFont: "22px",
      },
      backgroundImage: {
        "list-item-image": "url('/images/price-card-icon.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
