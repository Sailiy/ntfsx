import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

import '../../static/font_icon_file/iconfont.css'
import 'muse-ui/dist/muse-ui.css'
import MuseUI from 'muse-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import messages from '@/lang/index' //多语言文字
import ElementLocale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'

Vue.use(ElementUI)
Vue.use(MuseUI)
Vue.use(VueI18n)

//设置当前语言默认值--localStorage
let langNow
if (localStorage.lang) {
    langNow = localStorage.lang
} else {
    localStorage.lang = 'en'
    langNow = 'en';
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: langNow, // set locale
    messages, // set locale messages
});

ElementLocale.i18n((key, value) => i18n.t(key, value))//为了实现element插件的多语言切换


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    i18n,
    store,
    template: '<App/>'
}).$mount('#app')
