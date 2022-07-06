/**
 * 动态数据请求
 */

import Mock from 'mockjs'
import config from '@/request/config'

const url = config.ajaxUrl
const name = 'action'

function getColor() {
	let color = '#'
	for (let i = 0; i <= 5; i++) {
		if (Mock.Random.boolean()) {
			let num = Mock.Random.integer(0, 5)
			let letter = ['a', 'b', 'c', 'd', 'e', 'f']
			color += letter[num]
		} else
			color += Mock.Random.integer(0, 9);
	}
	return color;
}

function getImages() {
	return function() {
		var images = []
		for (let i = 0; i <= 2; i++) {
			images.push(Mock.Random.image("106x106", getColor(),Mock.Random.first()))
		}
		return images
	}
}

var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'arr|3-5': [{
		"id|+1": 1,
		"content": "@cparagraph",
		"images": getImages(),
		"time": '@date("y-MM-dd")',
		"tramsmit|1-800": 800,
		"comment|1-1000": 1000,
		"zan|1-1200": 1000,
	}]
})

Mock.mock(url+'/'+name, data)
/**
 * 测试输出代码
 */

// 使用 Mock
// var Mock = require('mockjs')
// 
// // 获取随机颜色
// function getColor() {
// 	let color = '#'
// 	for (let i = 0; i <= 5; i++) {
// 		if (Mock.Random.boolean()) {
// 			let num = Mock.Random.integer(0, 5)
// 			let letter = ['a', 'b', 'c', 'd', 'e', 'f']
// 			color += letter[num]
// 		} else
// 			color += Mock.Random.integer(0, 9);
// 	}
// 	return color;
// }
// 
// function getImages() {
// 	return function() {
// 		var images = []
// 		for (let i = 0; i <= 2; i++) {
// 			images.push(Mock.Random.image("108x108", getColor()))
// 		}
// 		return images
// 	}
// }
// 
// var data = Mock.mock({
// 	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
// 	'list|2-10': [{
// 		"id|+1": 1,
// 		"content": "@cparagraph",
// 		"images": getImages(),
// 		"time": '@time("H:m:s")',
// 		"tramsmit|1-800": 800,
// 		"comment|1-1000": 1000,
// 		"zan|1-1200": 1000,
// 
// 	}]
// })
// console.log(JSON.stringify(data, null, 4))
