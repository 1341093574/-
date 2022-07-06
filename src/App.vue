<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
	import Vue from 'vue'
	import 'vue2-toast/lib/toast.css';
	import Toast from 'vue2-toast'
	Vue.use(Toast)
	export default {
		name: 'App',
		data() {
			return {
				isLogin: true
			}
		},
		created() {
			this.$router.push({name:'dynamic'})
			if (sessionStorage.getItem('username') != null) {
				this.isLogin = false
			}
		},
		updated() {
			if (sessionStorage.getItem('username') != null) {
				this.isLogin = false
			}
		}
	}
</script>

<style>
	body {
		background: #f4f4f4;
	}
</style>
