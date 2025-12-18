/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-heatmap-1",
    "bg-heatmap-2",
    "bg-heatmap-3",
    "bg-heatmap-4",
    "bg-heatmap-5",
    "bg-heatmap-6",
    "bg-heatmap-7",
    "bg-heatmap-8",
    "bg-heatmap-9",
    "bg-heatmap-10",
    "bg-heatmap-11",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem',
      },
      colors: {
        // Base palette (Soft Tech)
        teal: "#00BFA6",
        graphite: {
          DEFAULT: "#2f2f2f",
          dark: "#1f1f1f",
          light: "#d9d9d9",
          middle: "#7a7a7a"
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
        heatmap: {
          1: '#A8D5BA',
          2: '#B9DDBF',
          3: '#C9E5A8',
          4: '#D9ED9A',
          5: '#E8F28C',
          6: '#F6E88C',
          7: '#F5D97A',
          8: '#E8D9A8',
          9: '#D9D9C9',
          10: '#C0C0C0',
          11: '#5DADE2'
        },
      },
    },
  },
  plugins: [],
};
