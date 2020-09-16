const path = require("path");
const merge = require("webpack-merge").merge;
const common = require("./webpack.common");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: "development",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      chunkFilename: "[name].js",
      pathinfo: false
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      contentBase: "./dist", // Content base
      port: 8080,
      stats: "errors-only",
      // hot: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300, // The default
        poll: 3600, // Check for changes every 10 second
        ignored: /node_modules/
      }
    },
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  });