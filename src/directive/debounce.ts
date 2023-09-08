/*
 * @Author: along
 * @Description:节流, 防止按钮多次点击，多次请求
 * @Date: 2023-09-08 11:20:55
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 11:24:04
 * @FilePath: /cxy-v3-template/src/directive/debounce.ts
 */
import {DirectiveBinding} from 'vue';

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		const time = binding.value?.time || 1000;
		const func = binding.value?.func || null;
		el.timer = null;

		el.addEventListener('click', () => {
			if (el.timer !== null) {
				clearTimeout(el.timer);
				el.timer = null;
			}
			el.timer = setTimeout(() => {
				func && func();
			}, time);
		});
	},
};
