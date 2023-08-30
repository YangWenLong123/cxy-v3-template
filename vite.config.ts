/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 13:22:11
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 14:07:26
 * @FilePath: /vue3/vite.config.ts
 */
import {fileURLToPath, URL} from 'node:url';

import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	const config = loadEnv(mode, __dirname);

	console.log(config);

	return {
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
				imports: ['vue', 'pinia', 'vue-router'],
				// 调整自动引入的文件位置
				dts: './auto-import.d.ts',
				// 解决自动引入eslint报错问题 需要在eslintrc的extend选项中引入
				eslintrc: {
					enabled: true,
					// 配置文件的位置
					filepath: './.eslintrc-auto-import.json',
					globalsPropValue: true,
				},
			}),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'~': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		define: {},
	};
});
