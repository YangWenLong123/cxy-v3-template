/*
 * @Author: along
 * @Description:
 * @Date: 2023-09-08 11:20:32
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 11:20:40
 * @FilePath: /cxy-v3-template/src/directive/index.ts
 */
import {App} from 'vue';

const modules = import.meta.glob('../directive/**/*.ts', {
	eager: true,
});

const mapDirective = new Map();

Object.keys(modules).forEach((key) => {
	if (modules[key] && modules[key].default) {
		const newKey = key.replace(/^\.\/|\.ts|\.js/g, '');
		mapDirective.set(newKey, modules[key].default);
	}
});

export default (app: App) => {
	mapDirective.forEach((value, key) => {
		app.directive(key, value);
	});
};
