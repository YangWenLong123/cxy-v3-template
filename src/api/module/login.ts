/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 17:53:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-30 17:55:49
 * @FilePath: /cxy-v3-template/src/api/login.ts
 */
import service from '~/service/axios';

export const login = (data: any) => {
	return service({
		url: '/api/base/cms/login',
		method: 'post',
		data: data,
	});
};
