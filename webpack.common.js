const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 该插件会使HMR功能丢失，所以开发环境需使用style-loader
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});//根据系统内核数指定 线程池个数 
const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".tsx", ".js", ".ts"]
  },
  // entry: ["./fund-experience/index.tsx"],
  entry: "./index.tsx",
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "assets/img/[name].[ext]?[hash]",
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "盘古",
      filename: "index.html", //Name of file in ./dist/
      template: "../public/index.html", //Name of template in ./src
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(),
    new HappyPack({
      id: 'babel',
      loaders: [
          {
              path: 'babel-loader',
              query: {
                  babelrc: true,
                  cacheDirectory: true,
              },
          }
      ],
      threadPool: happyThreadPool,
      verbose: true
  }),
  ]
};
