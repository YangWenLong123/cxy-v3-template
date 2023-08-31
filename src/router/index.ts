/*
 * @Author: along
 * @Description: 路由配置
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2023-08-31 11:23:47
 * @FilePath: /cxy-v3-template/src/router/index.ts
 */
import {createRouter, createWebHistory} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Index',
		component: import('~/views/index.vue'),
		// redirect: '/cms',
	},
	{
		path: '/login',
		name: 'Login',
		component: import('~/views/login/index.vue'),
	},
	{
		path: '/cms',
		name: 'Cms',
		component: import('~/views/cms/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
