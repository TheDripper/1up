module.exports = {
  purge: {
    content: ["./template/*.php"],
    layers: ["components"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md':'600px',
      'lg':'1152px'
    },
    colors: {
      white: "#fff",
      pink: "#FB5373",
      "div-grey": "#979797",
    },
    fontSize: {
      xs: ".75rem",
      tiny: ".875rem",
      sm: ".8889rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      head: "64px",
      "menu": "28px",
      body: "20px",
    },
    fontFamily: {
      head: ["Heading"],
      body: ["Body"],
      eyebrow: ["eyebrow"],
    },
    textColor: {
      content: "#081523",
      "eyebrow-dark": "#01FDAB",
      "eyebrow-white": "#0262F0",
      "menu-footer-bg": "#010203",
      "white":"#fff"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
