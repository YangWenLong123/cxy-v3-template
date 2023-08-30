/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 17:14:32
 * @FilePath: /cxy-v3-template/env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import {DefineComponent} from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare const __APP_ENV__: string;

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
