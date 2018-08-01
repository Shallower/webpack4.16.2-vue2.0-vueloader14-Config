/*
 * 事件总线
 * @Author: liangzc 
 * @Date: 2018-03-08 09:33:11 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-03-08 09:35:39
 */
let install = function(Vue) {
  let bus = new Vue();

  Object.defineProperties(bus, {
    on: {
      get() {
        return this.$on;
      }
    },
    once: {
      get() {
        return this.$once;
      }
    },
    off: {
      get() {
        return this.$off;
      }
    },
    emit: {
      get() {
        return this.$emit;
      }
    }
  });

  Vue.bus = bus;

  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return bus;
    }
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
module.exports = install;
