const devMode = process.env.npm_lifecycle_event !== 'build2';
const webpack = require('webpack');
const path = require('path');
const os = require('os');
//webpack3分离css,
//此插件可以把vue中引入的css文件抽离出来，
//但不能抽离出来vue文件内部的style
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//vue-loader在15之后需要在plugins中引入
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

//测试glob获取指定目录下的所有指定类型的文件
// const pattern = path.join(__dirname, '../src/**/*.vue');
// glob(pattern, { nodir: true }, function(err, files) {
//   if (err) console.log(9999999, err);
//   else console.log(5555555, files);
// });
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
    path: path.resolve(__dirname, '../dist/assets')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            css: 'vue-style-loader!css-loader',
            less: 'vue-style-loader!css-loader!less-loader',
            scss: 'vue-style-loader!css-loader!fast-sass-loader',
            sass: 'vue-style-loader!css-loader!fast-sass-loader',
            styl: 'vue-style-loader!css-loader!stylus-loader'
          },
          postLoaders: {
            html: 'babel-loader'
          }
        }
      },
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader'
      // },
      // {
      //   test: /iview\/.*?js$/,
      //   loader: 'happypack/loader?id=happybabel',
      //   exclude: /node_modules/
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize', 'postcss-loader', 'less-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize', 'fast-sass-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize', 'stylus-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
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
    //filename是分离后的路径
    new ExtractTextPlugin({
      filename: devMode ? '[name].css' : 'css/[name].[hash].css',
      allChunks: devMode ? false : true
    })
    // new webpack.LoaderOptionsPlugin({
    //   test: /\.vue$/,
    //   options: {
    //     vue: {
    //       loaders: {
    //         css: ExtractTextPlugin.extract({
    //           fallback: 'vue-style-loader',
    //           use: [
    //             'css-loader',
    //             'fast-sass-loader',
    //             'less-loader',
    //             'stylus-loader'
    //           ],
    //           publicPath: '../dist'
    //         })
    //       }
    //     }
    //   }
    // })
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
