/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    // custom lebar dari container default tailwind
    container: {
      center: true,
      padding: "16px",
    },
    // menambahkan fitur sendiri di tailwind
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
};
