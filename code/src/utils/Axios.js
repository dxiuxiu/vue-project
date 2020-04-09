import axios from 'axios'

/**
 * @desc 判断元素类型
 * @param obj : any
 * @return 
 */
function getType(obj) {
	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
/**
 * @desc 过滤对象
 * 如果对象 o  的属性为 null 或 undefined 会被过滤掉
 * 如果是字符串则去掉字符串前后空格
 *
 * @param {*} o : Object
 * @returns Object
 */
function filterNull(o) {
	Object.keys(o).map(key => {
		if (o[key] == null) {
			delete o[key]
		}
		if (getType(o[key]) === 'string') {
			o[key] = o[key].trim()
		} else if (getType(o[key]) === 'object') {
			o[key] = filterNull(o[key])
		} else if (getType(o[key]) === 'array') {
			o[key] = filterNull(o[key])
		}
	})
	return o
}
/**
 * @desc 对请求做公共处理 
 * @param {String} method Ajax请求类型 'POST'|'PUT'|'GET'|'DELETE'
 * @param {String} url 请求地址
 * @param {Object} params  参数
 * @returns Promise<T>
 */
function apiAxios(method, url, params) {
	if (params) {
		params = filterNull(params)
	}
	return new Promise((resolve, reject) => {
		axios({
			method,
			url,
			/** data 数据添加到请求体 - POST*/
			data: method === 'POST' || method === 'PUT' ? params : null,
			/** params 添加到 url 中 - GET */
			params: method === 'GET' || method === 'DELETE' || method === 'PATCH' ? params : null,
			withCredentials: false
		})
			.then((res) => {
				/** res 的 data 属性为后台接口返回数据的挂载点 */
				// resolve(res)
				// resolve(res)
				// console.log(res.data)
				resolve(res.data)
			}, err => {
				reject(err)
			})
			.catch((err) => {
				const errInfo = { 'err': err.response }
				reject(errInfo)
			})
	})
}
export default {
	get: (url, params) => {
		return apiAxios('GET', url, params)
	},
	post: (url, params) => {
		return apiAxios('POST', url, params)
	},
	put: (url, params) => {
		return apiAxios('PUT', url, params)
	},
	delete: (url, params) => {
		return apiAxios('DELETE', url, params)
	},
	patch: (url, params) => {
		return apiAxios('PATCH', url, params)
	}
}
