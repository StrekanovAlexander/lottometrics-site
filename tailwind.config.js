/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-heatmap-hotdark",
    "bg-heatmap-hot",
    "bg-heatmap-middledark",
    "bg-heatmap-middle",
    "bg-heatmap-colddark",
    "bg-heatmap-cold",
    "bg-heatmap-active",
    "border-heatmap-active",
    "border-heatmap-cold",
    "border-heatmap-colddark",
    "border-heatmap-middle",
    "border-heatmap-middledark",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem',
      },
      colors: {
        // Base palette (Soft Tech)
        // teal: "#00BFA6",
        graphite: {
          DEFAULT: "#2f2f2f",
          dark: "#1f1f1f",
          light: "#d9d9d9",
          middle: "#7a7a7a"
        },
        lightgray: "#F5F5F5",
        // Accent palette (Neo Pastel)
        // lavender: "#A78BFA",
        // mint: "#34D399",
        yellow: {
          DEFAULT: "#FCD34D",
          soft: "#FDE68A",
          calm: "#FAF089",
          golden: "#FACC15",
        },
        heatmap: {
          hotdark: "#F0C982",
          hot: "#F6DE97",
          middledark: "#D8D1BD",
          middle: "#E7E2D3",
          colddark: "#D0D3D6",
          cold: "#E4E6E8",
          1: "#E08A1E",
          2: "#F6C344", 
          3: "#B3A78F",
          4: "#C8BFA6",
          5: '#F2F5B0',
          6: '#E4F0C8', 
          7: '#CDE3C0', 
          7: '#D6EAF8', 
          8: '#C7E0F3', 
          9: '#D0E4F6',
          10: '#B6D4F2',
          gray: '#E0E0E0',
          active: "#D9A07A"
        },
      },
    },
  },
  plugins: [],
};
