import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import App from './App.vue'
import router from '@/router'
import '@/assets/style.css'
import '@/components/FormGenerator/styles/index.scss'
import '@/components/FormGenerator/icons'
import Tinymce from '@/components/FormGenerator/tinymce/index.vue'
import GroupTitle from '@/components/FormGenerator/components/GroupTitle/index.vue'
import Description from "@/components/FormGenerator/components/GfDescription/index.vue";

Vue.component('tinymce', Tinymce)
Vue.component('GroupTitle', GroupTitle)
Vue.component('GfDescription', Description)
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
