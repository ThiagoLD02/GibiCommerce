/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#105E46",
        accent: "#12805D",
        success: "#02D693",
        light: "#BFD1E5",
        tertiary: "#60695C",
        dark: "#1A1F16",
        placeholder: "rgba(26, 31, 22, 0.50)",
        danger: "#E5252C",
        warning: "#E6D117",
      },
    },
  },
  plugins: [],
};
