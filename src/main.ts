/*
 * @Author: along
 * @Description: 
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 13:35:51
 * @FilePath: /vue3/src/main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
