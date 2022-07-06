import Vue from 'vue'
// import router from './router'
import HttpService from '@/request/HttpService.js'

Vue.config.productionTip = false;

if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	var router = require('./router/indexH5').default;
	var App = () => import('./App.vue');
} else {
	var router = require('./router').default;
	var App = () => import('./views/PC/App.vue');
}

Vue.prototype.HttpService = HttpService;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
