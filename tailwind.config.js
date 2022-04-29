module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1400px",
        xl: "1400px",
        "2xl": "1400px",
      }
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url(/imgs/banner.jpg)",
        'teams': "url(/imgs/teams.jpg)",
        'section': 'url(/imgs/section.jpg)',
        'section2': 'url(/imgs/section2.png)'
      }
    },
  },
  plugins: [],
}
