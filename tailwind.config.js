module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        dash: "300px auto",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
