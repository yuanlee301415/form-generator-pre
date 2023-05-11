import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import App from './App.vue'
import router from '@/router'
import '@/assets/style.css'
import '@/components/FormGenerator/styles/index.scss'
import '@/icons'
import Tinymce from '@/components/FormGenerator/tinymce/index.vue'
import GfTitle from '@/components/FormGenerator/components/GfTitle/index.vue'
import GfDescription from "@/components/FormGenerator/components/GfDescription/index.vue";

Vue.component('tinymce', Tinymce)
Vue.component('GfTitle', GfTitle)
Vue.component('GfDescription', GfDescription)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
