/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-08-31 11:37:04
 * @FilePath: /cxy-v3-template/src/main.ts
 */
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createPersistedState} from 'pinia-persistedstate-plugin';
import App from './App.vue';
import router from './router';
import '~/utils/permission';

(() => {
	const app = createApp(App);
	const store = createPinia();
	store.use(createPersistedState());
	app.use(store);
	app.use(router);
	app.mount('#app');
})();
