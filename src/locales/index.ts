/*
 * @Author: along
 * @Description:
 * @Date: 2023-09-08 11:47:28
 * @LastEditors: along
 * @LastEditTime: 2024-03-20 14:34:12
 * @FilePath: /cxy-v3-template/src/locales/index.ts
 */
import {createI18n} from 'vue-i18n';
import zh from './zh.json';
import en from './en.json';

// 获取浏览器界面语言，默认语言
// https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/language

const pinia = localStorage['pinia-app']
	? JSON.parse(localStorage['pinia-app'])
	: 'zh';

export default createI18n({
	locale: pinia?.app?.language ?? 'zh',
	legacy: false, // you must set `false`, to use Composition API
	globalInjection: true, // 全局注册 $t
	messages: {
		zh,
		en,
	},
});

export const langs = [
	{key: 'zh', title: '中文'},
	{key: 'en', title: 'English'},
];
