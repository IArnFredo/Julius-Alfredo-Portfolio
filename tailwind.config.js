module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mob: "375px",
      tab: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
      laptopxl: "1680px",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
