/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 2px white", // Light blue shadow
          "0 0px 20px rgba(255, 255, 255, 0.1)", // Light blue shadow
        ],
      },
      spacing: {
        "3/2": "150%", // 2/3 * 100% = 150%
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
