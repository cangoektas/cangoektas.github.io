const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelConfig = require("./babel.config.json");

module.exports = {
  entry: ["./src/polyfill.ts", "./src/index.ts"],
  devtool: false,
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            ...babelConfig,
          },
        },
      },
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, "node_modules"),
        exclude: /core-js/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                require.resolve("@babel/preset-env"),
                {
                  // modules: false,
                  // loose: true,
                  // useBuiltIns: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(graphql|gql)$/,
        loader: "graphql-tag/loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
