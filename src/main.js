import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/modules/fruitShop.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
