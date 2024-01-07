/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url(/images/hero.jpg)",
        'section2-bg': "url(/images/section2.jpg)",
        'section5-bg': "url(/images/section5.jpg)" 
      },
      colors: {
        'clr-primary-blue': "#012499",
        'clr-secondary-blue': "#081234",
        'clr-light-blue': "#2177d6",
        'clr-white': "#ffffff",
        'clr-black': "#000000",
        'clr-gray': "#666666"
      },
      screens: {
        'xs': "475px",
        'xxs': "300px"
      }
    },
  },
  plugins: [],
}