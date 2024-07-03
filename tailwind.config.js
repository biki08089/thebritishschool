/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        cmd: { min: "850px" },
        xs: { min: "458px", max: "639px" },
      },
    },
    colors: {
      "cust-white": "#fdfdf5",
      "cust-white2": "#f9fdf5dd",
      "transparent-white": "#fdfdf51d",
      "cust-transparent2": "#fdfdf574",
      "cust-yellow": "#d3d33d",
      darkYellow: "#d29015",
      black: "black",
      "cust-yellow2": "#c3b377",
      "dark-purple": "#233255",
    },
  },
  plugins: [],
};
