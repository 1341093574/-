/**
 * 视频数据请求
 */
import Mock from 'mockjs'
import config from '@/request/config'

const url = config.ajaxUrl
const name = 'video'

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
		return Mock.Random.image("160x100", getColor(), Mock.Random.first())
	}
}

function getData() {
	return function() {
		return Mock.Random.date("y-MM-dd")
	}
}

function getTime() {
	return function() {
		return Mock.Random.time("m:s")
	}
}

var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'arr|6-15': [{
		"id|+1": 1,
		"title": "@cparagraph(1)",
		"image": getImages(),
		"play|1-1000": 1000,
		"time": getData(),
		"length": getTime(),
		"channel": '@integer(0,2)'
	}]
})

Mock.mock(url + '/' + name, data)
/**
 * 测试输出代码
 */

// 使用 Mock
// var Mock = require('mockjs')
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|2-10': [{
//         "id|+1":1,
//                 "username":"@cname",
//                 "image":Mock.Random.image('200x150'),
//                  "play|1-1000": 1000,
//                 "time":Mock.mock('@time("H:m:s")'),
//                 "length":Mock.mock('@time("H:m:s")'),
//                 "channel":Mock.mock('@ctitle(2)')
//     }]
// })
// console.log(JSON.stringify(data, null, 4))
