/**
 * 验证码数据请求
 */

import Mock from 'mockjs'
import config from '@/request/config'

const url = config.ajaxUrl
const name = 'code'

export function code() {
	
	function getCode(){
		let code = ''
		for(let i=0;i<=3;i++){
			if(Mock.Random.boolean())
				code += Mock.Random.word(1);
			else
				code += Mock.Random.integer(0,9);
		}
		return code;
	}
	var code = getCode()
	Mock.mock(url+'/'+name, {
		// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		'arr|1': [{
			code:code,
			imgUrl: Mock.Random.dataImage('50x30', code)
		}]
	})
}

/**
 * 测试输出代码
 */


// // 使用 Mock
// var Mock = require('mockjs')
// 
// function getCode(){
// 	let code = ''
// 	for(let i=0;i<=3;i++){
// 		if(Mock.Random.boolean())
// 			code += Mock.Random.word(1);
// 		else
// 			code += Mock.Random.integer(0,9);
// 	}
// 	return code;
// }
// var code = getCode()
// var data = Mock.mock({
// 	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
// 	'list|1': [{
// 		code:code,
// 		imgUrl: Mock.Random.dataImage('50x30', code)
// 	}]
// })
// console.log(JSON.stringify(data, null, 4))
