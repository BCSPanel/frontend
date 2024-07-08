// console.log('main')

// import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { i18nVue } from './i18n/i18n'
import { initColorScheme } from './components/colorScheme'

initColorScheme()

// 构建app
const app = createApp(App)
app.use(i18nVue)
app.use(router)
app.mount('#app')
