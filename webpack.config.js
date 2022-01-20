const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelConfig = require("./babel.config.json");

module.exports = {
  entry: "./src/index.ts",
  devtool: false,
  output: {
    filename: "app.[contenthash].js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
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
  plugins: [new HtmlWebpackPlugin()],
};
