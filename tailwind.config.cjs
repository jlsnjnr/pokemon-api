module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          5: "rgba(194, 0, 1, 0.15)",
          500: "#C20001",
        },
        blue: {
          5: "rgba(158, 185, 225, 0.1)",
        },
      },
    },
  },
  plugins: [],
};
