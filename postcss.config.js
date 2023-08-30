/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 16:18:25
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 16:20:11
 * @FilePath: /cxy-v3-template/postcss.config.js
 */
module.exports = {
	plugins: {
		autoprefixer: {
			overrideBrowserslist: [
				'Android 4.1',
				'iOS 7.1',
				'Chrome > 31',
				'not ie <= 11',
				'ff >= 30',
				'> 1%',
				'last 2 versions', // 所有主流浏览器最近2个版本
			],
			grid: true,
		},
	},
};
