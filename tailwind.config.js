/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#151c2c",
        "bg-color-soft": "#182237",
        "btn":"#5d57c9",
        "text-color": "#ffffff",
        "text-color-soft": "#b7bac1",
        "hover-color": "#2e374a",
      },
    },
  },
  plugins: [],
};
