/*
 * Axios 公共请求处理
 * @Author: Hanyz 
 * @Date: 2018-07-26 17:57:06 
 * @Last Modified by: Hanyz
 * @Last Modified time: 2018-07-26 11:14:30
 */
import axios from 'axios';
import router from '@/router';
import store from '@/store';

// # axios 请求额外参数

// axios({

//  silence: false 是否静默请求，静默状态下，不弹出 loading 框，不提示错误信息

//  errorHandle：false  是否手动处理错误信息，为 true 时，不提示错误信息，需要手动实现 catch

//  response: false  是否返回全部请求信息，为 true 时，返回response 信息，包括http 请求信息,为 false 时，仅返回 data 数据

// })

// axios.defaults.withCredentials = true; //暂时屏蔽Http单实例
!$globalConfig.debug && (axios.defaults.baseURL = Url.baseUrl); //debug模式用 proxyTable 实现跨域请求
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
let source = axios.CancelToken.source();
// token 不携带白名单
let whiteList = ['v1/login/operatorLogin'];
axios.interceptors.request.use(
  config => {
    if (!config.silence && config.loading) {
      //config.silence:是否静默
      config.loading = config.loading || {};
      config.loadingInstance = store._vm.$loading({
        target: config.loading.loadingTarget,
        text: config.loading.text,
        fullscreen: !config.loading.loadingTarget,
        customClass: config.loading.customClass
      });
    }
    if (!whiteList.some(url => config.url.endWith(url))) {
      config.url = store._vm.$utils.setUrlParams(
        { token: store.getters.token },
        config.url
      );
    }
    let _configData = store._vm.$utils.is('FormData', config.data)
      ? config.data
      : {
          ...(config.data || config.params || {})
        };
    if (
      config.method === 'post' &&
      config.headers.post &&
      config.headers.post['Content-Type'] === 'application/json;charset=utf-8'
    ) {
      //POST JSON字符串
      if (store._vm.$utils.is('FormData', config.data)) {
        _configData = { [_configData.platform]: _configData.platform };
        config.data.forEach((value, key) => (_configData[key] = value));
      }
      config.data = JSON.stringify(_configData || {});
    } else {
      if (config.method === 'get') {
        for (let key in _configData) {
          let tempData = _configData[key];
          _configData[key] =
            store._vm.$utils.is('Object', tempData) || Array.isArray(tempData)
              ? JSON.stringify(tempData)
              : tempData;
        }
      }
      config.params && (config.params = _configData);
      config.data && (config.data = _configData);
    }
    $globalConfig.console && console.log('[url:::]', config.url);
    $globalConfig.console && console.log('[send:::]', _configData);
    config.cancelToken = source.token;
    return config;
  },
  err => {
    handleError(err.config, err.message);
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    closeLoading(response.config);
    let responseData = response.data;
    $globalConfig.console &&
      console.log(
        '[response:::]',
        response.config.response === true ? response : responseData
      );
    let msg = !responseData
      ? '请求异常，请重试'
      : responseData.ret === 0 || responseData.status === true
        ? null
        : responseData.errmsg || responseData.message || '响应失败，请重试';
    if (msg) {
      if (responseData && responseData.ret === 11000) {
        // source.cancel(msg || '登录超时，请重新登录');
        store.dispatch(LOGOUT);
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath }
        });
      } else if (responseData && responseData.ret === 11004) {
        // source.cancel(msg || '没有权限');
        router.replace({
          path: '/401',
          query: { redirect: router.currentRoute.fullPath }
        });
      } else {
        handleError(response.config, msg, 'warning');
      }
      return Promise.reject({
        message: msg,
        data: (responseData || {}).data,
        code: (responseData || {}).ret || (responseData || {}).status
      });
    }
    return response.config.response === true ? response : responseData;
  },
  error => {
    let errMsg =
      error.message && error.message.indexOf('timeout') !== -1
        ? '请求超时，请重试'
        : error.message;
    handleError(error.config, errMsg);
    $globalConfig.console && console.error(error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.push({
            path: '/401',
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        default:
          break;
      }
    }
    return Promise.reject({ message: errMsg });
  }
);

let closeLoading = config => {
  config = config || {};
  if (!config.silence) {
    //config.silence:是否静默
    if (config.loadingInstance) {
      config.loadingInstance.close();
    } else {
      let loadingMask = document.querySelector('.el-loading-mask');
      loadingMask && loadingMask.parentNode.removeChild(loadingMask);
    }
  }
};

let handleError = (config, error, type) => {
  config = config || {};
  if (!config.silence) {
    closeLoading(config);
    !store._vm.$utils.isEmpty(error) &&
      !config.errorHandle &&
      store._vm.$message({
        showClose: true,
        message: error,
        type: type || 'error'
      });
  }
};

/**
 * 带loading 的 post 请求
 * @param {String} url 请求地址
 * @param {Object} data 业务数据
 * @param {Object} loadingOpt loading配置 {loadingTarget: loading节点，原生 element 或选择器, text: loading文本, customClass：自定义class名字}
 */
axios.posting = (url, data, loadingOpt) => {
  if (store._vm.$utils.is('Object', url)) {
    return axios(url);
  }
  if (data && data.loadingTarget) {
    loadingOpt = data;
    data = null;
  }
  return axios({
    url: url,
    data: data,
    method: 'post',
    loading: loadingOpt || {}
  });
};
/**
 * 带loading 的 get 请求
 * @param {String} url 请求地址
 * @param {Object} data 业务数据
 * @param {Object} loadingOpt loading配置 {loadingTarget: loading节点，原生 element 或选择器, text: loading文本, customClass：自定义class名字}
 */
axios.geting = (url, data, loadingOpt) => {
  if (store._vm.$utils.is('Object', url)) {
    return axios(url);
  }
  if (data && data.loadingTarget) {
    loadingOpt = data;
    data = null;
  }
  data = data || {};
  data.loading = loadingOpt || {};
  return axios(url, data);
};
export default axios;
