/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // 🔴 این مهمه!
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // 🔴 این خط رو هم اضافه کن
  ],
}
