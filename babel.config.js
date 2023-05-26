module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-export-default-from",
  ],
};
