/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base palette (Soft Tech)
        teal: "#00BFA6",
        graphite: {
          DEFAULT: "#2f2f2f",
          dark: "#1f1f1f",
          light: "#d9d9d9",
        },
        lightgray: "#F5F5F5",
        // Accent palette (Neo Pastel)
        lavender: "#A78BFA",
        mint: "#34D399",
        yellow: {
          DEFAULT: "#FCD34D",
          soft: "#FDE68A",
          calm: "#FAF089",
          golden: "#FACC15",
        },
      },
    },
  },
  plugins: [],

};
