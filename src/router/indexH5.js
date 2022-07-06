import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/H5/index.vue'
import DynamicH5 from '@/views/H5/dynamic.vue'
import vidoeH5 from '@/views/H5/video.vue'
import login from "@/views/H5/login.vue"

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: 'dynamic'
	},
	{
		path: '/index',
		name: 'index',
		component: index,
		children: [{
				path: '/dynamic',
				name: 'dynamic',
				component: DynamicH5
			},
			{
				path: '/video',
				name: 'video',
				component: vidoeH5
			},

		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/H5/login.vue')
	}
]




const router = new VueRouter({
	routes,
	// mode: 'history'
})

export default router
