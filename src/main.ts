// console.log('main')

// import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementClassListAddOrRemove from './components/elementClassListAddOrRemove'
import { i18nVue } from './i18n/i18n'

// 深色模式
const matchMediaDark = window.matchMedia("(prefers-color-scheme: dark)");
let BCSPanelColorScheme = ''
try {
  BCSPanelColorScheme = (await (await fetch('./api/color-scheme/')).text()).trim()
} catch (e) {
  console.error(e);
}

function matchMediaDarkChange() {
  ElementClassListAddOrRemove(
    document.children[0],
    BCSPanelColorScheme ? BCSPanelColorScheme == "dark" : matchMediaDark.matches,
    "dark",
  )
}
matchMediaDarkChange();
if (!BCSPanelColorScheme) matchMediaDark.addEventListener("change", matchMediaDarkChange);

// 移除加载时的style
self.loading_style?.remove();


// 构建app
const app = createApp(App)
app.use(i18nVue)
app.use(router)
app.mount('#app')
