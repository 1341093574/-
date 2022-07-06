<template>
	<div id="app">
		<!-- 头部 -->
		<div class="m-navbar">
			<a href="/" class="logo router-link-active">
				<i class="iconfont Navbar_logo"></i>
			</a>
			<div class="right">
				<a href="javascript:;" class="search">
					<i class="iconfont ic_search_tab"></i>
				</a>
				<a @click="go('login')" class="face" v-if="isLogin">
					<img src="https://s1.hdslb.com/bfs/static/jinkela/long/images/login.png" class="bfs-img">
				</a>
				<a class="face" v-if="!isLogin">
					<img src="../../assets/img/noface.jpg">
				</a>

			</div>
		</div>

		<!-- 信息 -->
		<div class="m-space-info">
			<div class="banner"></div>
			<div class="part1">
				<div class="face">
					<img src="http://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg" class="bfs-img avatar">
					<img src="http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png" class="official">
				</div>
				<div class="relation">
					<div class="count">
						<span class="fans">
							<span class="num">234</span>
							<br>
							<span class="type">粉丝</span>
						</span>
						<span class="split"></span>
						<span class="follow">
							<span class="num">6</span>
							<br>
							<span class="type">关注</span>
						</span>
						<span class="split"></span>
						<span class="likes">
							<span class="num">265</span>
							<br>
							<span class="type">获赞</span>
						</span>
					</div>
					<div class="follow-btn">
						<button class="gray">已关注</button>
					</div>
				</div>
			</div>
			<div class="part2">
				<div class="base">
					<span class="name">茂职院计算机工程系</span>
					<span class="gender">
					</span>
					<span class="level">
						<i class="iconfont ic_userlevel_2" style="color:#95DDB2;"></i>
					</span>
				</div>
				<div class="verify">
					<img src="http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png" class="official">
					<span class="">bilibili机构认证：茂职计算机系官方账号</span>
				</div>
				<div class="desc">
					<span class="content hasRole">茂名职业技术学院计算机工程系官方账号修徳 强技 求实 创新</span>
				</div>
				<div data-v-2d9266af="" class="tags">
					<span data-v-2d9266af="">uid:488524310</span>
				</div>
				<div class="clearfloat"></div>
			</div>
		</div>
		<div class="tabs">
			<router-link tag="span" :to="{name:'dynamic'}" class="">动态</router-link>
			<router-link tag="span" :to="{name:'video'}" class="">视频</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
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
		},
		methods: {
			go(path) {
				this.$router.push(path);
			}
		}
	}
</script>

<style>
	.router-link-active {
		color: #fb7299;
	}


	* {
		margin: 0;
		padding: 0;
	}

	a {
		outline: 0;
		color: inherit;
		text-decoration: none;
	}



	ul {
		list-style: none;
	}

	.m-navbar {
		height: 11.73333vw;
		line-height: 11.73333vw;
		padding: 0 3.2vw 0 4.8vw;
		font-size: 0;
		background: #fff;
		width: 100%;
		box-sizing: border-box;
	}

	.m-navbar .logo {
		float: left;
		height: 11.73333vw;
	}

	.m-navbar .right {
		float: right;
		height: 11.73333vw;
	}

	.m-navbar .right .search {
		margin-right: 5.86667vw;
		width: 5.86667vw;
		height: 5.86667vw;
		display: inline-block;
		margin-top: 0.53333vw;
	}

	.m-navbar .right .face {
		vertical-align: top;
		width: 6.4vw;
		height: 6.4vw;
		display: inline-block;
		margin-top: 2.66667vw;
	}

	.m-navbar .right .face img {
		width: 100%;
		height: 100%;
		border-radius: 3.2vw;
	}

	.m-navbar .logo i {
		color: #fb7299;
		font-size: 7.46667vw;
	}

	.iconfont {
		font-family: iconfont !important;
		font-size: 4.26667vw;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.m-space-info {
		background: #fff;
		font-size: 0;
	}

	@import url("../../assets/font/fontH5.css");
	@import url("../../assets/css/H5info.css");
</style>
