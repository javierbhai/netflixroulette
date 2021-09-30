const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "development" ? "" : "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths:[path.resolve(__dirname, 'src/design/settings/')]
            }
          }
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 9000,
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      design: path.resolve(__dirname, 'src/design/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      uikit: path.resolve(__dirname, 'src/ui-kit/'),  
    }
  }
};