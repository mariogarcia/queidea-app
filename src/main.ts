import Vue from 'vue'
import App from './App.vue'
import VueRx from 'vue-rx'
import router from '@/services/router'

Vue.config.productionTip = false

Vue.use(VueRx)

new Vue({
  render: h => h(App),
  router,
  components: { App },
  template: "<App/>",
}).$mount('#app')
