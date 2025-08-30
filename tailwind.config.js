module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3DA0FF",  // base
          light: "#6DB9FF",    // lighter
          dark: "#1877E0",     // darker
          glow: "#A5D4FF",     // glow tint
        },
      },
      boxShadow: {
    brand: "0 0 6px 2px rgba(61,160,255,0.4)", // subtle base glow
    brandStrong: "0 0 15px 4px rgba(61,160,255,0.8)", // stronger hover glow
  },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  plugins: [],
}; 