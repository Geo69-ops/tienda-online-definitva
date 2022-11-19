const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: __dirname + "/src/public/",
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
