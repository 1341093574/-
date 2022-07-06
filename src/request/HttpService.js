import axios from 'axios'
import config from '@/request/config'
import action from '@/mock/action.js'
import {code} from '@/mock/code.js'
import collects from '@/mock/collects.js'
import video from '@/mock/video.js'

const instance = axios.create({
	method: 'get'
})
const url = config.ajaxUrl;

var Service ={}
	
Service.get = function (path, succ, fail) {
	if(path=='/code'){
		code()
	}
	instance(url + path).then(res => {
		succ(res.data.arr)
	}).catch(err => {
		fail(err)
	})
}

export default Service


