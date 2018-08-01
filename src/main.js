import css from './css/index.css';
import testcss from './css/test.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
// import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

window.Vue = Vue;
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');
