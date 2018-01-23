// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
//import 'iview/dist/styles/iview.css';
import './style/theme.less';
import './style/common.scss';
import './style/animate.scss';

import store from './vuex/store'
import Vuex from 'vuex'

import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/image/pics_error.png',
  loading: 'static/image/pics_loading.gif',
  try: 3 // default 1
})

Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
