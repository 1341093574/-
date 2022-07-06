<template>
	<div id="app">
		<header>
			<div class="logo"><img src="../../assets/img/logo.png"></div>
			<ul>
				<li>
					<a href="javascript:;">主站<i class="iconfont icon-xiangxia"></i></a>
				</li>
				<li>
					<a href="javascript:;">番剧</a>
				</li>
				<li>
					<a href="javascript:;">游戏中心</a>
				</li>
				<li>
					<a href="javascript:;">直播</a>
				</li>
				<li>
					<a href="javascript:;">会员购</a>
				</li>
				<li>
					<a href="javascript:;">漫画</a>
				</li>
				<li>
					<a href="javascript:;">赛事</a>
				</li>
				<li>
					<a href="javascript:;">BW</a>
				</li>
			</ul>
			<div class="download-App">
				<a href="javascript:;">
					<div><img src="../../assets/img/phone.png"></div>
					<span>下载App</span>
				</a>
			</div>
			<div class="find" :style="{'margin-left':isLogin?'61px':'20px'}">
				<input type="text" placeholder="瘦了十斤之后,世界真的变了">
				<a href="#" class="fdj">
					<img src="../../assets/img/fdj.png">
				</a>
			</div>
			<div class="right" v-if="isLogin">
				<div class="login">
					<router-link to="/login">
						<img src="../../assets/img/akari.jpg">
						登录
					</router-link>
				</div>
				<div class="register">
					<router-link to="/register">注册</router-link>
				</div>
				<div class="contribute">
					<a href="javascript:;">投稿</a>
				</div>
			</div>
			<div class="right" v-if="!isLogin">
				<div class="avatar">
					<a href="javascript:;">
						<div id="popover">
							<img id="portrait" src="../../assets/img/akari.jpg">
							<van-popover id="van-popover"></van-popover>
						</div>
					</a>
				</div>
				<div class="register">
					<a href="javascript:;">大会员</a>
				</div>
				<div class="register">
					<a href="javascript:;">消息</a>
				</div>
				<div class="register">
					<a href="javascript:;">动态</a>
				</div>
				<div class="register">
					<a href="javascript:;">收藏</a>
				</div>
				<div class="register">
					<a href="javascript:;">历史</a>
				</div>
				<div class="register">
					<a href="javascript:;">创作中心</a>
				</div>
				<div class="contribute">
					<a href="javascript:;">投稿</a>
				</div>
			</div>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
	import vanPopover from "@/components/vanPopover.vue"
	export default {
		name: 'App',
		components: {
			vanPopover
		},
		data() {
			return {
				isLogin: true
			}
		},
		created() {
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
	@import url("../../assets/font/font_438759_kmvtb0te1nd.css");

	* {
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	ul {
		list-style: none;
	}

	#app {
		max-width: 100%;
		min-width: 1518px;
	}

	header {
		position: relative;
		max-width: 100%;
		min-width: 1470px;
		height: 36px;
		padding: 10px 24px;
		font-size: 14px;
		background-color: #fff;
	}

	header .logo {
		float: left;
		height: 35px;
		width: 70px;
		line-height: 36px;
	}

	header .logo img {
		width: 100%;
		height: 100%;
	}

	header ul {
		float: left;
		width: 375px;
		line-height: 36px;
	}

	header ul li {
		list-style: none;
		float: left;
		margin-left: 12px;
		font-size: 14px;
	}

	header .download-App {
		float: left;
		height: 30px;
		width: 100px;
		margin-top: 3px;
		margin-left: 20px;
		font-size: 14px;
	}

	header .download-App div {
		float: left;
		width: 18px;
		height: 30px;
	}

	header .download-App img {
		float: left;
		width: 100%;
		height: 100%;
	}

	header .download-App span {
		display: block;
		float: left;
		line-height: 30px;
	}

	header .right {
		float: right;
	}

	header .login {
		float: left;
		width: 71px;
		height: 32px;
		line-height: 36px;
	}

	header .login img {
		float: left;
		display: block;
		width: 32px;
		height: 100%;
		border: 1px solid #C0C0C0;
		border-radius: 50%;
		margin-right: 5px;
	}

	.avatar {
		float: left;
		width: 32px;
		height: 32px;
	}

	.avatar #portrait {
		float: left;
		display: block;
		width: 32px;
		height: 100%;
		border: 1px solid #C0C0C0;
		border-radius: 50%;
		margin-right: 5px;
		transition: all 0.5s;
	}

	header .register {
		float: left;
		height: 32px;
		line-height: 36px;
		margin-left: 10px;
	}

	header .contribute {
		float: left;
		width: 100px;
		height: 36px;
		margin-left: 10px;
	}

	header .contribute a {
		display: block;
		line-height: 36px;
		text-align: center;
		width: 100%;
		height: 100%;
		background-color: #FB7299;
		color: #fff;
		border: 0;
		outline: none;
	}

	header .find {
		float: left;
		width: 443px;
		height: 38px;
		margin-left: 61px;

	}

	header .find input {
		float: left;
		color: #999;
		font-size: 14px;
		width: 380px;
		height: 100%;
		border: 0;
		padding-left: 15px;
		background-color: #F4F4F4;
		outline: none;
		color: #212121;
	}

	header .find .fdj {
		float: left;
		display: block;
		width: 48px;
		height: 100%;
	}

	header .find .fdj img {
		width: 100%;
		height: 100%;
	}

	#popover {
		width: 32px;
		height: 32px;
		position: relative;
	}

	#popover:hover #van-popover {
		display: inherit;
		opacity: 1;
		z-index: 2020;
	}

	#popover:hover #portrait {
		transform: translatey(30px) scale(1.5);
		z-index: 10;
	}

	#van-popover {
		position: absolute;
		left: 16px;
		transform: translateX(-50%);
		/* display: none; */
		z-index: -2020;
		opacity: 0;
		transition: all 0.5s;
	}



	/* .van-poppe… */
</style>
