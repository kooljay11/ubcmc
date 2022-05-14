module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      "color-1": "#34572A",
      "color-2": "#B3D575",
      "color-3": "#23272A",
    },
    fontFamily: {
      "bungee": ["Bungee", "sans-serif"],
      "jetbrainsmono": ["JetBrainsMono", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'mc-icon': "url('/src/images/background.jpg')",
      }
    },
  },
  plugins: [],
}