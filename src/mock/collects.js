/**
 * 收藏数据请求
 */

import Mock from 'mockjs'
import config from '@/request/config'

const url = config.ajaxUrl
const name = 'collects'


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
			images.push(Mock.Random.image("190x119", getColor(), Mock.Random.first()))
		}
		return images
	}
}

function getData() {
	return function() {
		return Mock.Random.date("y-MM-dd")
	}
}

var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'arr|3-5': [{
		"id|+1": 1,
		"title": "@cparagraph(1)",
		"image": getImages(),
		"time": getData(),
		"length": '@time(00:00)',
		"folder|1-3": 3
	}]
})

Mock.mock(url + '/' + name, data)


/**
 * 测试输出代码
 */

// // 使用 Mock
// var Mock = require('mockjs')
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|2-10': [{
//         "id|+1":1,
//             "name":"@cname",
//             "image":Mock.Random.image('200x150'),
//             "time":Mock.mock('@time("H:m:s")'),
//             "length":Mock.mock('@time(00:00)'),
//             "folder|1-3":3,

//     }]
// })
// console.log(JSON.stringify(data, null, 4))
