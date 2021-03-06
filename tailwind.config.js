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
        lg: "1300px",
        xl: "1300px",
        "2xl": "1300px",
      }
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url(/imgs/hero.jpg)",
        'teams': "url(/imgs/teams.jpg)",
        'section': 'url(/imgs/section.jpg)',
        'section2': 'url(/imgs/section2.jpg)',
        'road': 'url(/imgs/road.png)'
      }
    },
  },
  plugins: [],
}
