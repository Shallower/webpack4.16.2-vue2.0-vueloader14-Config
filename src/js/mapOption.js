/*
 * 合并字典项，动态扫描 options 文件夹
 * @Author: liangzc 
 * @Date: 2018-06-12 10:14:27 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-08-01 17:52:30
 */
let _ = require('lodash'),
  _mapOptions = (r => r.keys().map(key => r(key)))(
    require.context('./', true, /^\.\/options\/((?!\/)[\s\S])+\.js$/)
  ).reduce((prev, current) => {
    return _.defaultsDeep({}, prev, current);
  }, {}),
  _roles = require('./data/roles');

let merge = (source, target) => {
  target = target || {};
  for (let key in source) {
    if (Object.prototype.toString.call(source[key]) === '[object Object]') {
      target[key] = merge(source[key]);
    } else {
      let obj = {
        options: source[key]
      };
      obj.options.forEach(option => {
        option.name && (obj[option.name] = String(option.code));
      });
      target[key] = obj;
    }
  }
  return target;
};

let rolesCfg = merge(_roles),
  roles = Object.values(merge(_roles)).reduce((prev, current) => {
    return Object.assign(prev, current);
  }, {});
delete roles.options;

export const MapOption = Object.freeze(merge(_mapOptions));
export const RoleType = Object.freeze(Object.assign(rolesCfg, roles));
