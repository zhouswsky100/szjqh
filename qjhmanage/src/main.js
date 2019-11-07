// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {Promise} from 'es6-promise'
import 'babel-polyfill';
import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import './assets/css/common.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store
}).$mount('#app')
