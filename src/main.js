import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import './directives'

// plugins
import './plugins/vuetify'

// styles
import './assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
