module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        magenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        openSans: 'Open Sans, sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
