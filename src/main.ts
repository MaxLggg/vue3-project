import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// ant-desgin-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 公共样式
import '@/styles/common.less'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(ElementPlus)

app.mount('#app')
