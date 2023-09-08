/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 11:48:56
 * @FilePath: /cxy-v3-template/src/main.ts
 */
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createPersistedState} from 'pinia-persistedstate-plugin';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const store = createPinia();
store.use(createPersistedState());
app.use(store);
app.use(router);

// i18n
import i18n from './locales';
app.use(i18n);

// 注册指令
import directive from './directive';
directive(app);

// 应用级的错误处理器，用来捕获所有子组件上的错误：
app.config.errorHandler = (err, instance, info) => {
	console.error('error ---', err);
	console.error('instance ---', instance);
	console.error('info ---', info);
};

app.mount('#app');

import '~/utils/permission';
