/*
 * 业务工具
 * @Author: liangzc 
 * @Date: 2018-05-26 10:04:03 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-07-10 16:42:27
 */
let BizTools = (function() {
  let MapOption, RoleType;

  /**
   * 重置Model对象
   * @param {Object|Array} model model对象
   * @param {String|Array} ignore 忽略字段
   * @param {Boolean} deep 是否深度重置（内嵌对象重置）
   */
  function resetModel(model, ignore, deep) {
    if (typeof ignore === 'boolean') {
      deep = ignore;
      ignore = [];
    }
    ignore = Array.isArray(ignore) ? ignore : [ignore];
    if (Vue.$utils.is('Object', model)) {
      Vue.$utils.forEach(model, (value, key) => {
        if (Vue.$utils.inArray(key, ignore) >= 0) return true;
        if (Vue.$utils.is('Object', value)) {
          deep ? resetModel(value, ignore) : model[key] = {};
        } else if (Array.isArray(value)) {
          deep ?
            value.every(val => Vue.$utils.is('String', val)) ?
              model[key] = [] :
              value.forEach(vl => resetModel(vl, ignore)) :
            model[key] = [];
        } else {
          model[key] = '';
        }
      });
    } else if (Array.isArray(model)) {
      model.forEach(item => resetModel(item, ignore));
    }
    return model;
  }

  /**
   * 设置model
   * @param {Object} model 需要设置的对象
   * @param {Object} value 赋值来源
   * @param {Array} keys 需要赋值的键名
   */
  function setModelValue(model, value, keys) {
    if (!value) return model;
    if (keys && Array.isArray(keys)) {
      keys.forEach(key => {
        model[key] = value[key];
      });
    } else {
      Vue.$utils.forEach(value, (val, key) => {
        model[key] = val;
      });
    }
    return model;
  }

  /**
   * 转换省市区地址（如果传递业务对象，默认按照以下字段取值）
   * @param {String} province 省份编码
   * @param {String} city   城市编码
   * @param {String} district  地区编码
   * @param {String} address   详细地址
   */
  function convertAddress(province, city, district, address) {
    if (!province) return;
    Vue.$utils.CityData = Vue.$utils.CityData || require('@/js/data/city.data');
    if (Vue.$utils.is('Object', province)) {
      let _Obj = province;
      province = _Obj.province;
      city = _Obj.city;
      district = _Obj.district;
      address = _Obj.address;
    }
    if (!province) return address || '';
    let provinceObj = Vue.$utils.CityData[province] || {},
      cityObj = Vue.$utils.get(provinceObj, `districts[${city}]`, {}),
      districtObj = Vue.$utils.get(cityObj, `districts[${district}]`, {});
    return `${provinceObj.name || ''}${cityObj.name || ''}${districtObj.name ||
      ''}${address || ''}`;
  }

  /**
   * 转换角色
   * @param {String} optionKey 字典项对应的 key
   * @param {*} code 字典Code
   * @param {*} defaultVal 默认值
   */
  function convertRole(optionKey, code, defaultVal) {
    if (!RoleType) {
      RoleType = require('@/js/mapOption').RoleType || {};
    }
    return (
      (
        Vue.$utils
          .get(RoleType, `${optionKey}.options`, [])
          .find(item => String(item.code) === String(code)) || {}
      ).label ||
      defaultVal ||
      ''
    );
  }

  /**
   * 转换字典项
   * @param {String} optionKey 字典项对应的 key
   * @param {*} code 字典Code
   * @param {*} defaultVal 默认值
   */
  function convertOption(optionKey, code, defaultVal) {
    if (!MapOption) {
      MapOption = require('@/js/mapOption').MapOption || {};
    }
    return (
      (
        Vue.$utils
          .get(MapOption, `${optionKey}.options`, [])
          .find(item => String(item.code) === String(code)) || {}
      ).label ||
      defaultVal ||
      ''
    );
  }

  /**
   * 获取字典项
   * @param {String} optionKey 字典项对应的 key， 支持路径，为空返回全部字典项
   */
  function mapOption(optionKey) {
    if (!MapOption) {
      MapOption = require('@/js/mapOption').MapOption || {};
    }
    return Vue.$utils.isEmpty(optionKey) ?
      MapOption :
      Vue.$utils.get(MapOption, optionKey, {});
  }

  return {
    resetModel: resetModel, //重置Model对象
    setModelValue: setModelValue, //设置Model 数据 setModelValue(obj, value);
    convertAddress: convertAddress, //转换省市区地址（如果传递业务对象，默认按照以下字段取值:[province, city, district, address]）
    convertRole: convertRole, //转换角色
    convertOption: convertOption, //转换字典项
    mapOption: mapOption //获取字典项,optionKey为空返回全部字典项
  };
})();

typeof exports === 'object' && typeof module !== 'undefined' ?
  module.exports = BizTools :
  window.BizTools = BizTools;
