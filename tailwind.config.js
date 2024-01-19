/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1/5": "20%",
        "4/5": "80%",
        "10/12": "83%",
        "11/12": "91%",
        "14/15": "94%",
      },
      maxHeight: {
        "4/5": "80%",
        "10/12": "83%",
        "11/12": "91%",
        "14/15": "94%",
      },
    },
  },
  plugins: [require("daisyui")],
};
