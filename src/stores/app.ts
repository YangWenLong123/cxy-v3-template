/*
 * @Author: along
 * @Description:
 * @Date: 2023-09-08 13:35:40
 * @LastEditors: along
 * @LastEditTime: 2024-05-21 10:03:51
 * @FilePath: /cxy-v3-template/src/stores/app.ts
 */
import {defineStore} from 'pinia';
export const useAppStore = defineStore('appStore', {
	state: () => {
		return {
			collapsed: false,
		};
	},
	getters: {},
	actions: {
		toggleCollapsed() {
			this.collapsed = !this.collapsed;
		},
	},
});
