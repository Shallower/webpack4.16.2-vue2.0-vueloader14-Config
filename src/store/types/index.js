let contexts = require.context('./', false, /^((?!index).)*\.js$/);
let obj = {};
contexts.keys().forEach(key => {
  let func = contexts(key);
  if (typeof func !== 'undefined') {
    obj = Object.assign(obj, func);
  }
});
module.exports = obj;
