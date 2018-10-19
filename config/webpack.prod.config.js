const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');
//PurifyCSSPlugin该插件不能够过滤掉vue文件内部未用到的style
//可以过滤掉引用的样式文件中未用到的样式
const PurifyCSSPlugin = require('purifycss-webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
//解决css抽离后js和css压缩的问题
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  // mode: 'development', //开发环境：development  生产环境：production
  //插件，用于生产模板和各项功能
  plugins: [
    new cleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../')
    }),
    //导出html文档
    new HtmlWebpackPlugin({
      minify: {
        //是对html文件进行压缩
        removeComments: true, //移除HTML中的注释 (生产环境使用)
        collapseWhitespace: true, //删除空白符与换行符 (生产环境使用)
        removeAttributeQuotes: true //removeAttrubuteQuotes是去掉属性的双引号 (生产环境使用)。
      },
      favicon: path.resolve('favicon.ico'),
      hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      filename: 'index.html',
      template: 'index.html' //是要打包的html模版路径和文件名称。
    }),
    // new MiniCssExtractPlugin({
    //   filename: utils.assetsPath('css/[name].[contenthash:7].css')
    // }),
    //使用消除未使用的样式，需要放到extractTextPlugin插件调用的后面
    new PurifyCSSPlugin({
      //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
      paths: glob.sync(path.join(__dirname, '../src/**/*.vue'))
    })
  ],
  //这个配置是用来处理优化配置的，它将会覆盖webpack默认的js压缩（其他测试中），
  //所以这里要使用UglifyJsPlugin()重新压缩一下js，optimizeCss({})压缩抽离出来的css
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin(), new optimizeCss()],
    splitChunks: {
      chunks: 'async',
      // 大于30KB才单独分离成chunk
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all'
        },
        echarts: {
          name: 'echarts',
          chunks: 'all',
          // 对echarts进行单独优化，优先级较高
          priority: 20,
          test: function(module) {
            var context = module.context;
            return (
              context &&
              (context.indexOf('echarts') >= 0 ||
                context.indexOf('zrender') >= 0)
            );
          }
        }
      }
    }
  }
});
