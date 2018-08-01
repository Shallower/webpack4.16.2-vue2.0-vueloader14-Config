//增加一个.postcssrc.js来指定postcss所使用的插件。就跟.babelrc类似
module.exports = {
  plugins: [
    // 处理css前缀
    require('autoprefixer')({
      browsers: [
        // 加这个后可以出现额外的兼容性前缀
        '> 0.01%'
      ]
    }),
    // 处理flex浏览器兼容性
    require('postcss-flexibility'),
    // 处理css中rgba颜色代码
    require('postcss-color-rgba-fallback'),
    // 处理css中opacity的IE兼容性。
    require('postcss-opacity')
  ]
};
