/*
 * 地图工具
 * @Author: liangzc 
 * @Date: 2018-05-26 10:04:03 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-07-05 15:01:44
 */
let MapTools = (function() {
  /**
   * 初始化地图SDK
   */
  function initSdk(cb) {
    let path =
        'http://webapi.amap.com/maps?v=1.4.6&key=8d0584f43d6c3e520dc96fe877062bc0&plugin=AMap.Autocomplete,AMap.Geocoder',
      mapScript = document.querySelector(`script[src$="${path}"]`);
    if (mapScript === null) {
      let a = document.createElement('script');
      a.src = path;
      a.onload = () => {
        console.log('Amap.Sdk load success !!! ');
        a.setAttribute('loaded', true);
        cb && cb();
      };
      a.onerror = () => {
        console.error('Amap.Sdk load fail , path : ', path);
      };
      let c = document.getElementsByTagName('script')[0];
      c.parentNode.insertBefore(a, c);
    } else if (mapScript.hasAttribute('loaded')) {
      cb && cb();
    }
  }

  /**
   * 初始化地图
   * @param {String|HTMLDivElement} container 地图容器DIV的ID值或者DIV对象
   * @param {*} options 地图初始化参数对象，参数详情参看MapOptions列表 //https://lbs.amap.com/api/javascript-api/reference/map#MapOption
   */
  function initMap(container, options) {
    return new Promise(resolve => {
      setTimeout(
        () =>
          this.initSdk(() => {
            let map = new AMap.Map(
              container,
              options || {
                resizeEnable: true,
                zoom: 18
              }
            );

            map.plugin(['AMap.ToolBar'], () => {
              map.addControl(new AMap.ToolBar());
            });
            if (location.href.indexOf('&guide=1') !== -1) {
              map.setStatus({ scrollWheel: false });
            }
            resolve(map);
          }),
        0
      );
    });
  }

  return {
    initSdk: initSdk, //初始化地图SDK
    initMap: initMap //初始化地图
  };
})();

typeof exports === 'object' && typeof module !== 'undefined' ?
  module.exports = MapTools :
  window.MapTools = MapTools;
