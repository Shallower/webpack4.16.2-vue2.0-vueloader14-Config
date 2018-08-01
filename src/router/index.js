/*
 * 全局状态管理
 * @Author: Hanyz 
 * @Date: 2018-07-26 17:57:06 
 * @Last Modified by: Hanyz
 * @Last Modified time: 2018-07-26 11:14:30
 */
import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store';
import { constantRoutes } from './config';
// import permission from './permission';
Vue.use(Router);

const router = new Router({
  scrollBehavior: () => ({ y: 0 }), //vue scrollBehavior滚动行为
  routes: constantRoutes
});

// router.beforeEach((to, from, next) => {
//   // NProgress.start();
//   //初始化用户信息（详情 /store/modules/user）
//   // store.dispatch(INIT_USER);
//   let title = to.meta.title || to.params.title;
//   if (!title) {
//     let match = to.matched[to.matched.length - 1];
//     match && match.parent && (title = match.parent.meta.title);
//   }
//   document.title = title || '';
//   // router.app.$store = router.app.$store || store;
//   // permission(router.app, to, from)
//   //   .then(path => next(path))
//   //   .catch(errPath => {
//   //     next(errPath);
//   //     // NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
//   //   });
// });

console.log(555555, constantRoutes);
export { constantRoutes };
export default router;
