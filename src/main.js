import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './directives'

// plugins
import './plugins/vuetify'

// styles
import './assets/scss/app.scss'

Vue.config.productionTip = false

// show loading screen
const preloader = document.getElementById('preloader')
preloader.style.display = 'flex'

new Vue({
  router,
  store,
  render: h => {
    preloader.style.display = 'none'
    return h(App)
  }
}).$mount('#app')
