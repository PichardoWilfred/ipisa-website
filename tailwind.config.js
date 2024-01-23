module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '560px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    colors: {
      blue: {
        100: "#C3E3FF",
        200: "#8BC8FF",
        300: "#52ADFF",
        DEFAULT: "#0478E0",
        400: "#00488D"
      },
      orange: {
        100: "#FFD9C2",
        200: "#FFA571",
        300: "#FF8B46",
        DEFAULT: "#FF7320"
      },
      white: {
        DEFAULT: "#FFF",
        100: "#f5f2f2",
        200: "#F3F6FA",
      },
      black: {
        400: "#344661",
        500: "#CEE3FF",
        600: "#AABDD8",
        DEFAULT: "#4B6286",
        700: "#7D96BD"
      },
      separator: "#A9C2E0",
      gray: {
        100: "#E0E0E0",
        200: "#B3B3B3",
        300: "#A4A4A4",
        400: "#636363",
        800: "#292929",
      },
    },
    fontFamily: {
      'garamond': ['"EB Garamond"', '"ui-monospace"'],
      'raleway': ['"Raleway"','ui-sans-serif'],
      'inter': ['"Inter"','ui-sans-serif'],
    }
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [],
}

