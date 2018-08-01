/*
 * 路由配置
 * @Author: Hanyz
 * @Date: 2018-07-26 17:57:06
 * @Last Modified by: Hanyz
 * @Last Modified time: 2018-07-26 11:14:30
 */
const _import = file => () => import(`@/pages/${file}`);

export const constantRoutes = [
  {
    path: '/',
    component: _import('home/index'),
    meta: {
      title: '首页',
      constant: true
    }
  },
  {
    path: '/login',
    component: _import('login/login'),
    meta: {
      title: '会员-登录',
      constant: true
    }
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
    meta: {
      title: '404',
      constant: true
    }
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
    meta: {
      title: '401',
      constant: true
    }
  }
];
