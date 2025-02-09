/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", // Flowbite React uchun
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")], // Flowbite pluginini qo'shish
};


