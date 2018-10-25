/*
 * 全局配置
 * @Author: liangzc 
 * @Date: 2017-07-20 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-04-08 11:20:42
 */

(function(window) {
  var global = {
    /**
     * 全局配置类
     */
    globalConfig: {},
    /**
     * 日志配置
     */
    logConfig() {
      if (this.globalConfig.console) {
        console.log(
          '%cNow You Can Console Log...',
          'color:red;font-size:18px;font-style:oblique;'
        );
      } else {
        console.log = function() {
          return false;
        };
        console.error = function() {
          return false;
        };
      }
    },
    /**
     * 初始化配置
     */
    initConfig() {
      this.globalConfig[
        process.env.ENV_CONFIG === 'dev' ? 'debug' : process.env.ENV_CONFIG
      ] = true;

      const console =
        process.env.ENV_CONFIG === 'dev' || process.env.ENV_CONFIG === 'sit';
      console && (this.globalConfig.console = console);
      this.logConfig();
    }
  };
  global.initConfig();
  window.$globalConfig = global.globalConfig;
})(window);
