/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 13:36:02
 * @FilePath: /cxy-v3-template/src/stores/app.ts
 */
import {defineStore} from 'pinia';

function store() {
	const state = reactive({
		app: {
			language: 'zh',
		},
	});
	return {
		...toRefs(state),
	};
}
export const useAppStore = defineStore('app', store, {
	persist: {
		enabled: true,
	},
});
