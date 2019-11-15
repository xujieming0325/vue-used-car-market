import Vue from 'vue'
import Mint from 'mint-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import *as GlobalFilter from '@/assets/js/GlobalFilter'
import base from './base'
// 导入事件格式化组件库
import moment from 'moment'
// 定义时间格式化全局过滤器
Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-DD-MM HH:mm:ss') => {
  return moment(dateStr).format(pattern)
})
//全局过滤器文件
Object.keys(GlobalFilter).forEach(key => {
  Vue.filter(key, GlobalFilter[key])
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Mint);
Vue.use(base);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
