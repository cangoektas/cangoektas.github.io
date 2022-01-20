const path = require("path");
const babelConfig = require("./babel.config.json");

module.exports = {
  entry: "./src/index.ts",
  devtool: false,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            ...babelConfig,
          },
        },
      },
    ],
  },
};
