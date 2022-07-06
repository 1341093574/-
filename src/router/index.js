import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/PC/Index.vue'
import Login from '@/views/PC/Login.vue'
import Register from '@/views/PC/Register.vue'
import Home from '@/views/PC/Home.vue'
import Dynamic from '@/views/PC/Dynamic.vue'
import Video from '@/views/PC/Video.vue'
import Audio from '@/views/PC/Audio.vue'
import Article from '@/views/PC/Article.vue'
import Album from '@/views/PC/Album.vue'
import Channel from '@/views/PC/Channel.vue'
import Favlist from '@/views/PC/Favlist.vue'


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: 'home'
	},
	{
		path: '/index',
		name: 'index',
		component: Index,
		children: [
			{
				path: '/home',
				name: 'home',
				component: Home
			},
			{
				path: '/dynamic',
				name: 'dynamic',
				component: Dynamic
			}, ,
			{
				path: '/video',
				name: 'dideo',
				component: Video
			},
			{
				path: '/audio',
				name: 'audio',
				component: Audio
			},
			{
				path: '/article',
				name: 'article',
				component: Article
			},
			{
				path: '/album',
				name: 'album',
				component: Album
			},
			{
				path: '/channel',
				name: 'Channel',
				component: Channel
			},
			{
				path: '/favlist',
				name: 'Favlist',
				component: Favlist
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	}
]



const router = new VueRouter({
	routes,
	// mode: 'history'
})

export default router
