/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.3)',
        md: '2px 2px 3px rgba(0,0,0,0.4)',
        lg: '3px 3px 4px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 3px rgba(0,0,0,0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 4px rgba(0,0,0,0.5)',
        },
      });
    },
  ],
};
