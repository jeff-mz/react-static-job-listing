/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        light_gray_background: "hsl(180, 52%, 96%)",
        light_gray_filter_tablets: "hsl(180, 31%, 95%)",
        dark_gray: "hsl(180, 8%, 52%)",
        very_dark_gray: "hsl(180, 14%, 20%)",
      },
      fontFamily: ["League Spartan", "sans-serif", "Poppins", "Karla"],
    },
  },
  plugins: [],
};
