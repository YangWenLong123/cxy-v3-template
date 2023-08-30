/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 17:25:47
 * @FilePath: /cxy-v3-template/src/main.ts
 */
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createPersistedState} from 'pinia-persistedstate-plugin';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';

(() => {
	const app = createApp(App);
	const store = createPinia();
	store.use(createPersistedState());
	app.use(store);
	app.use(router);
	app.use(Antd);
	app.mount('#app');
})();
