/**
 * Created by Liangzc on 2017/11/08.
 *
 * 使用说明:
 *
 * //生成规则对象（包含校验函数、错误提示）
 * rules: [this.$validator.type('tel', '请正确填写电话')]
 *
 *
 * //生成规则数组，适用于生成多条校验规则（返回校验规则数组，包含校验规则函数、错误提示等等）
 *
 *  -- 多条规则
 * rules: this.$validator.rules({rule: 'required|mobile', message: ['请填写手机号', '请正确填写手机号']})
 *  or
 * rules: this.$validator.rules({rule: 'required|mobile', message: '请填写手机号|请正确填写手机号'})
 *
 *  -- 单条规则
 * rules: this.$validator.rules({rule: 'required', message: '请填写手机号'})
 *
 *
 * //校验单个字段
 * this.$validator.validate('required|mobile', userName);
 */
let { rules } = require('./rules'),
  VueComponent;
let validator = function() {};

/**
 * 初始化Validator
 */
let initValidator = (type = '') => {
  let defRule = rules[type] || {};
  return !defRule ?
    false :
    (rule, value, callback, source, options) => {
      let required = type === 'required',
        test = defRule.test,
        valid =
            required || !required && !VueComponent.$utils.isEmpty(value) ?
              VueComponent.$utils.is('Function', defRule.test) ?
                defRule.test.call(this, value) :
                VueComponent.$utils.is('String', defRule.test) ?
                  VueComponent.$utils.is('Function', test) ?
                    test.call(this, value) :
                    test.test(value) :
                  defRule.test.test(value) :
              true;
      if (!valid) {
        callback(
          new Error(
            rule.message || defRule.message.format(defRule.placeholder)
          )
        );
      } else {
        callback();
      }
    };
};

/**
 * 根据类型返回校验函数
 * @param {String} type 数据类型
 * @param {String} message 提示信息，提示信息不为空时返回 rule 对象，{ validator: Function, message: '请正确填写电话' }
 *
 * @return {Function|Object}
 */
validator.prototype.type = (type, message) => {
  return { validator: initValidator(type), message };
};

/**
 * 初始化校验规则
 * @param {Object} param 参数 {rule: 校验规则，支持多规则, message: '错误提示' }
 * param: {
 *    rule: {String|Array} 'required', 'required|mobile', ['required', 'mobile'] 校验规则
 *    message: {String|Array} 错误提示，按照 rule 定义规则取值
 * }
 */
validator.prototype.rules = (param = {}) => {
  let { rule = '', message = '' } = param;
  let defRules = Array.isArray(rule) ? rule : rule.split('|'),
    messages = Array.isArray(message) ? message : message.split('|');
  return defRules.map((rule, index) => {
    if (rule === 'required') {
      return { required: true, message: messages[index] };
    }
    return { validator: initValidator(rule), message: messages[index] };
  });
};

/**
 * 校验数据
 * @param {String} type 数据类型
 * @param {Object} value 数据
 *
 * @return {Boolean}
 */
validator.prototype.validate = (type = '', value) => {
  let defRules = type.split('|');
  return (
    defRules
      .map(type => {
        let defRule = rules[type] || {};
        if (!defRule) return true;
        let test = defRule.test,
          valid = VueComponent.$utils.is('Function', defRule.test) ?
            defRule.test.call(this, value) :
            VueComponent.$utils.is('String', defRule.test) ?
              VueComponent.$utils.is('Function', test) ?
                test.call(this, value) :
                test.test(value) :
              defRule.test.test(value);
        return valid;
      })
      .indexOf(false) === -1
  );
};

let install = function(Vue, options) {
  VueComponent = Vue;
  options &&
    options.rules &&
    (rules = Object.assign(rules, rules, options.rules));
  Vue.prototype.$validator = Vue.$validator = new validator(Vue);
};

module.exports = install;
