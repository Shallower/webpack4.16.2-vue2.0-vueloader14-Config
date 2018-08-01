const siteConfig = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  //入口文件配置项
  entry: {
    //里面得main是可以随便写的
    main: './src/main.js'
  },
  //出口文件得配置项
  output: {
    //打包的文件名
    filename: '[name].js', //这里的name告诉我们的是进去得是什么名字出来的就是什么名字
    publicPath: siteConfig.publicPath,
    chunkFilename: '[name].chunk.js'
  },
  //插件，用于生产模板和各项功能
  plugins: [
    //导出html文档
    new HtmlWebpackPlugin({
      favicon: path.resolve('favicon.ico'),
      hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      filename: 'index.html',
      template: 'index.html' //是要打包的html模版路径和文件名称。
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin() //用户名替代id
  ],
  //配置webpack开发服务功能
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, '../dist'),
    //服务器得IP地址，可以使用IP也可以使用localhost
    host: siteConfig.host,
    //服务器端压缩是否开启
    compress: true,
    //配置服务端口号
    port: siteConfig.port
  }
});
