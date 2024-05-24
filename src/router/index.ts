/*
 * @Author: along
 * @Description: 路由配置
 * @Date: 2023-08-30 14:50:34
 * @LastEditors: along
 * @LastEditTime: 2024-05-21 09:52:49
 * @FilePath: /cxy-v3-template/src/router/index.ts
 */
import {createRouter, createWebHistory} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
import {Home} from './modules/home';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Index',
		component: () => import('~/layout/index.vue'),
		redirect: '/home',
		children: [...Home],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
