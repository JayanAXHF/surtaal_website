module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        mainText: "fadeIn 1s ease-in forwards",
        Navbar: "fadeIn 0.8s ease-in forwards",
        cards: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "media",
  variants: {
    animation: ["motion-safe"],
  },
};
