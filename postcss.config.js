module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer")
  ]
};
