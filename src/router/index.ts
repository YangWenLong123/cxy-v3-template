/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 15:55:20
 * @FilePath: /cxy-v3-template/src/router/index.ts
 */
import {createRouter, createWebHistory} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Index',
		component: import('~/views/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
