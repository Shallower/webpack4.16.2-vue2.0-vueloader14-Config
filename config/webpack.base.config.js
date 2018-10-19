const siteConfig = require('./utils');
const devMode = process.env.npm_lifecycle_event !== 'build';
const path = require('path');
const os = require('os');
//webpack4分离css第一种方法
//该方法仅能提取出main.js引用的css，scss，sass等
//可以抽离出vue内部的style
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//vue-loader在15之后需要在plugins中引入
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  entry: {
    main: '@/main'
    // 'vender-base': '@/vendors/vendors.base.js', //基础插件
    // 'vender-exten': '@/vendors/vendors.exten.js' //拓展插件
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    //打包的文件名
    filename: 'js/[name].js', //这里的name告诉我们的是进去得是什么名字出来的就是什么名字
    publicPath: siteConfig.publicPath,
    chunkFilename: 'js/[name].chunk.js'
  },
  module: {
    rules: [
      ////该vue-loader配置可以把vue项目的style提取出来，但不建议用，个人感觉没必要
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            css: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader'
            ],
            less: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'less-loader'
            ],
            scss: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'fast-sass-loader'
            ],
            sass: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'fast-sass-loader'
            ],
            styl: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'stylus-loader'
            ]
          },
          postLoaders: {
            html: 'babel-loader'
          }
        }
      },
      ////下面的vue-loader配置不能把vue项目的style提取出来
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     loaders: {
      //       css: 'vue-style-loader!css-loader',
      //       less: 'vue-style-loader!css-loader!less-loader',
      //       scss: 'vue-style-loader!css-loader!fast-sass-loader',
      //       sass: 'vue-style-loader!css-loader!fast-sass-loader',
      //       styl: 'vue-style-loader!css-loader!stylus-loader'
      //     },
      //     postLoaders: {
      //       html: 'babel-loader'
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=happybabel',
        exclude: /node_modules/
      },
      {
        test: /\.js[x]?$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happybabel'
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'fast-sass-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      //媒体文件处理
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 40000,
          name: 'media/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : 'css/[id].[hash].css'
    })
    // //vue-loader在15之后需要在plugins中引入
    // new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('../src'),
      components: path.resolve(__dirname, '../src/components'),
      assets: path.resolve(__dirname, '../src/assets')
    }
  }
};
