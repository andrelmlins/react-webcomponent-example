const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const APP_PATH = "./src";

const config = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "default",
    libraryTarget: "umd"
  },

  resolve: { extensions: [".js"] },

  module: {
    rules: [
      { test: /\.(js)x?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },

  plugins: []
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.entry = path.resolve(__dirname, APP_PATH);
    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(APP_PATH, "index.html")
      })
    );
  } else {
    config.entry = path.resolve(__dirname, APP_PATH);
    config.plugins.push(
      new Webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    );
  }

  return config;
};
