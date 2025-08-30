module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3D8BFF",  // main shield blue
          light: "#6DB5FF",    // lighter highlight
          dark: "#1C4C96",     // dark border/navy
          glow: "#A8D8FF",     // soft glow tint
        },
      },
      boxShadow: {
        brand: "0 0 6px 2px rgba(61,139,255,0.4)",       // subtle glow
        brandStrong: "0 0 15px 4px rgba(61,139,255,0.8)", // stronger hover glow
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};
