const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    clean: true,
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    port: 3000,
    open: true,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
      },
      // {
      //   test: /\.(png|jpg|svg)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "img/[name].[ext]",
      //     publicPath: "/",
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
