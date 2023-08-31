/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 17:53:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-31 09:21:14
 * @FilePath: /cxy-v3-template/src/api/module/login.ts
 */
import {post} from '~/service/axios';

export const login = (data: any) => {
	return post({
		url: '/api/base/cms/login',
		method: 'post',
		data: data,
	});
};
