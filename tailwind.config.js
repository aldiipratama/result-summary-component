/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      hanken: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        "light-red": "#ff5757",
        "orangey-yellow": "#ffb01f",
        "green-teal": "#00bd91",
        "cobalt-blue": "#1125d4",
        "light-royal-blue": "#2e2be9",
        "light-slate-blue": "#7857ff",
        "violet-blue": "#4e21ca",
        "persian-blue": "#2421ca",
        "pale-blue": "#ebf1ff",
        "light-lavender": "#c8c7ff",
        "dark-gray-blue": "#303b5a",
      },
    },
  },
  plugins: [],
};
