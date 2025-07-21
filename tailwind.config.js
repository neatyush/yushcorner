/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
