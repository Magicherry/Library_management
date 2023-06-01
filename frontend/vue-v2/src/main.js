import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/global.css'
import SlideVerify from 'vue-monoplasty-slide-verify';
// 导入组件

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });  // medium small mini
Vue.use(SlideVerify);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
