// const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: "twig-loader"
      }
    ]
  }
};