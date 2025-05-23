module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../server/dist/index.html" // Optional: if Go templates inject classes after build
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};