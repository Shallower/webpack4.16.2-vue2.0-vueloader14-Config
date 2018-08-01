/*
 * 全局配置Module
 * @Author: liangzc 
 * @Date: 2018-01-18 11:30:49 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-07-13 12:28:59
 */
import {
  UPDATE_CONFIG,
  TOGGLE_SIDEBAR,
  ADD_VISITED_VIEWS,
  DEL_VISITED_VIEWS
} from '@/store/types';

const global = {
  state: {
    sidebar: {
      //侧边栏是否打开
      opened: !+Number(sessionStorage.sidebarStatus || '0')
    },
    visitedViews: [], //顶部边栏显示已经点击过的 el-tag
    config: {} //全局配置
  },
  getters: {
    url: state => state.config.url || {},
    sidebar: state => state.sidebar,
    visitedViews: state => state.visitedViews
  },
  mutations: {
    /**
     * 更新全局配置
     */
    [UPDATE_CONFIG]: (state, config) => {
      state.config = Object.assign(state.config, state.config, config || {});
    },
    /**
     * 切换侧边栏打开/关闭
     */
    [TOGGLE_SIDEBAR]: state => {
      if (state.sidebar.opened) {
        sessionStorage.sidebarStatus = 1;
      } else {
        sessionStorage.sidebarStatus = 0;
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    /**
     * 增加已访问的视图用于顶栏 el-tag 标签展示
     */
    [ADD_VISITED_VIEWS]: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return;
      state.visitedViews.push({
        meta: view.meta,
        name: view.name,
        path: view.path,
        fullPath: view.fullPath
      });
    },
    /**
     * 删除已访问的视图
     */
    [DEL_VISITED_VIEWS]: (state, view) => {
      if (!view) {
        state.visitedViews = [];
        return;
      }
      let index;
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          index = i;
          break;
        }
      }
      state.visitedViews.splice(index, 1);
    }
  },
  actions: {
    /**
     * 更新全局配置
     * @param {Store} commit module
     * @param {Object} config 配置信息
     */
    [UPDATE_CONFIG]({ commit }, config) {
      commit(UPDATE_CONFIG, config);
    },
    /**
     * 切换侧边栏打开/关闭
     */
    [TOGGLE_SIDEBAR]({ commit }) {
      commit(TOGGLE_SIDEBAR);
    },
    /**
     * 增加已访问的视图用于顶栏 el-tag 标签展示
     * @param {Router} view 访问过的视图
     */
    [ADD_VISITED_VIEWS]({ commit }, view) {
      commit(ADD_VISITED_VIEWS, view);
    },
    /**
     * 删除已访问的视图
     * @param {Router} view 访问过的视图
     */
    [DEL_VISITED_VIEWS]({ commit, state }, view) {
      return new Promise(resolve => {
        commit(DEL_VISITED_VIEWS, view);
        resolve([...state.visitedViews]);
      });
    }
  }
};
export default global;
