const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      //not necessary for webpack 4 or greater
      // {
      //   test: /\.json$/,
      //   loader: "json-loader",
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
