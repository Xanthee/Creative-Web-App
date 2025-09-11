/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tech: ['"Share Tech"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-calc(6*30vw + 5*1rem))" }, 
          // move left exactly the width of all images + gaps
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite", // adjust duration for smoothness
      },
       fadeInLeft: 'fadeInLeft 1s ease-out forwards',
      },
  },
  plugins: [],
}
