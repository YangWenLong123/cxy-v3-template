/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-30 17:51:28
 * @LastEditors: along
 * @LastEditTime: 2023-09-08 11:19:14
 * @FilePath: /cxy-v3-template/src/service/axios.ts
 */
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
import Qs from 'qs';

const service = axios.create({
	baseURL: __APP_ENV__,
	timeout: 10000,
	withCredentials: true,
});

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		config.headers['Content-Type'] = 'application/json;charset=UTF-8';
		config.headers['token'] = '123';
		return config;
	},
	(error: any) => {
		Promise.reject(error);
	}
);

service.interceptors.response.use(
	async (response: AxiosResponse) => {
		const {status, data} = response;
		if (status === 200) return data;
		if (status === 401) {
			// message.error('Token获取失败');
			return Promise.reject(data);
		}
		return Promise.reject(data);
	},
	(error: any) => {
		return Promise.reject(error);
	}
);

export function post({url, params, data, headers} = {}) {
	return new Promise((resolve, reject) => {
		service
			.post(url, data, {
				params,
				headers,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}

export function get({url, params, headers}) {
	return new Promise((resolve, reject) => {
		service
			.get(url, {
				params: Qs.parse(params),
				headers,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
