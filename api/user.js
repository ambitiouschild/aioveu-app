/**
 * 用户相关api
 */
import request from '@/utils/request'

// 小程序授权登录
// #ifdef MP
export function login(code) {
	return request({
		url: '/aioveu-auth/oauth2/token',
		method: 'post',
		params: {
			code: code,
			grant_type: 'wechat'
		},
		headers: {
			'Authorization': 'Basic bWFsbC1hcHA6MTIzNDU2' // 客户端信息Base64加密，明文：mall-app:123456
		}
	})
}
// #endif

// H5/Android/IOS 手机短信验证码登录
// #ifndef MP
export function login(mobile, code) {
	return request({
		url: '/aioveu-auth/oauth2/token',
		method: 'post',
		params: {
			mobile: mobile,
			code: code,
			grant_type: 'sms_code'
		},
		headers: {
			'Authorization': 'Basic bWFsbC1hcHA6MTIzNDU2' // 客户端信息Base64加密，明文：mall-app:123456
		}
	})
}
// #endif



export function logout() {
	return request({
		url: '/aioveu-auth/oauth/logout',
		method: 'delete',
		headers: {
			'auth': true // 需要认证，通过
		}
	})
}

export function getUserInfo() {
	return request({
		url: '/aioveu-ums/app-api/v1/members/me',
		method: 'get',
		headers: {
			'auth': true
		}
	})
}

export function sendSmsCode(phoneNumber) {
	return request({
		url: '/aioveu-auth/api/v1/auth/sms_code',
		method: 'post',
		params: {
			mobile: phoneNumber
		}
	})
}