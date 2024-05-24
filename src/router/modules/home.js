/*
 * @Author: along
 * @Description: home
 * @Date: 2024-05-21 09:29:34
 * @LastEditors: along
 * @LastEditTime: 2024-05-21 17:22:05
 * @FilePath: /cxy-v3-template/src/router/modules/home.js
 */
export const Home = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('~/views/Home/index.vue'),
		meta: {
			title: '首页',
		},
	},
	{
		path: '/condition',
		name: 'Condition',
		component: () => import('~/views/Condition/index.vue'),
		meta: {
			title: '条件分支',
		},
	},
];
