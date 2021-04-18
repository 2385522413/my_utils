const path = require("path");
module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 打包文件夹
    publicPath: "dist",
    // 打包文件
    filename: "yk-utils.js",
  },
  // 配置webpack-dev-server
  devServer: {
    // 静态根目录
    contentBase: "www",
    // 端口号
    port: 8080,
  },
};
