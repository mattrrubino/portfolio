/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesque: ['"Darker Grotesque"', "sans-serif"],
      },
      backgroundColor: {
        accent: "#EE0000",
      },
      textColor: {
        accent: "#EE0000",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out",
      },
    },
  },
  plugins: [],
}
