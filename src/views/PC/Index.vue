<template>
	<div class="index">
		<div class="top">
			<div class="gradient"></div>
			<div class="user">
				<div class="avatar">
					<img src="../../assets/img/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg_64x64.jpg">
					<span></span>
				</div>
				<div class="basic">
					<div>
						<span class="name">茂职院计算机工程系</span>
						<a href="javascript:;" class="lv"></a>
					</div>
					<div>
						<span class="spacing">茂名职业技术学院计算机工程系官方账号 修徳 强技 求实 创新</span>
					</div>
				</div>
				<div class="action">
					<a href="javascript:;" class="attention-btn">关注</a>
					<a href="javascript:;" class="message-btn">发消息</a>
					<a href="javascript:;" class="be-dropdown-trigger"><i class="iconfont icon-ic_more"></i></a>
				</div>
			</div>
		</div>
		<div class="nav" ref="nav">
			<div class="nav-inner">
				<router-link to="/home" class="nav-box">
					<div @click="activeNum=0" :class="{'is-active':activeNum===0}">
						<span class="iconfont icon-ic_home"></span>
						<span class="nav-text">主页</span>
					</div>
				</router-link>
				<router-link to="/dynamic" class="nav-box">
					<div @click="activeNum=1" :class="{'is-active':activeNum===1}">
						<span class="iconfont icon-ic_following"></span>
						<span class="nav-text">动态</span>
					</div>
				</router-link>
				<router-link to="/video" class="nav-box">
					<div @click="activeNum=2" :class="{'is-active':activeNum===2}">
						<span class="iconfont icon-ic_video"></span>
						<span class="nav-text">投稿</span>
						<span class="num">10</span>
					</div>
				</router-link>
				<router-link to="/channel" class="nav-box">
					<div @click="activeNum=3" :class="{'is-active':activeNum===3}">
						<span class="iconfont icon-ic_channel"></span>
						<span class="nav-text">频道</span>
						<span class="num">10</span>
					</div>
				</router-link>
				<router-link to="/favlist" class="nav-box">
					<div @click="activeNum=4" :class="{'is-active':activeNum===4}">
						<span class="iconfont icon-ic_collect"></span>
						<span class="nav-text">收藏</span>
						<span class="num">1</span>
					</div>
				</router-link>
				<div class="find">
					<input type="text" v-model="searchValue" placeholder="搜索视频">
					<span class="search" @click="toSearch()"></span>
				</div>
				<div class="statistics">
					<a href="javascript:;">
						<p>关注数</p>
						<p>6</p>
					</a>
					<a href="javascript:;">
						<p>粉丝数</p>
						<p>232</p>
					</a>
					<span>
						<p>获赞数</p>
						<p>259</p>
					</span>
					<span>
						<p>播放数</p>
						<p>4464</p>
					</span>
				</div>
			</div>
		</div>
		<div class="space">
			<router-view></router-view>
		</div>
		<div class="to-top" @click="toTop()" :style="'display: '+showToTop"></div>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				activeNum: 0,
				searchValue: '',
				ivideo: null,
				elNav: null,
				showToTop: "none"
			}
		},
		created() {
			let that = this
			window.onscroll = function() {
				that.doTopBtn()
			}
			this.$nextTick(_ => {
				that.elNav = this.$refs.nav
			})
			let body = document.querySelector('body')
			body.style.backgroundColor = '#f4f5f7'
			let path = this.$route.path
			let arr = [
				'/',
				'/dynamic',
				['/video', '/audio', '/article', '/album'],
				'/channel',
				'/favlist'
			]
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] == path) {
					this.activeNum = i
				}
				if (i == 2) {
					for (let j = 0; j < arr[i].length; j++) {
						if (arr[i][j] == path) {
							this.activeNum = i
						}
					}
				}
			}
		},
		methods: {
			toSearch() {
				let that = this
				this.$router.push({
					path: '/video',
					query: {
						keyword: this.searchValue
					}
				});
				if (this.ivideo == null) {
					if (this.$route.path == "/video") {
						var children = this.$children
						children.forEach(function(v, i, a) {
							if (v.$el.id == "video") {
								// console.log(0,v)
								that.ivideo = v
								that.ivideo.search()
							}
						})
					}
				} else {
					this.ivideo.search()
				}
			},
			doTopBtn() {
				if (this.elNav.getBoundingClientRect().top < 0) {
					this.showToTop = 'block'
				} else {
					this.showToTop = 'none'
				}
			},
			toTop() {
				window.scrollTo(0, 0)
			}
		}
	}
</script>

<style scoped>
	@import url("../../assets/font/font_438759_kmvtb0te1nd.css");

	* {
		margin: 0;
		padding: 0;
	}

	.nav-box {
		box-sizing: border-box;
		border-bottom: 2px solid transparent;
	}

	.index {
		width: 1280px;
		margin: 0 auto;
		height: 500px;
	}

	.top {
		position: relative;
		width: 100%;
		height: 200px;
		background: url(../../assets/img/cb1c3ef50e22b6096fde67febe863494caefebad.png);
	}

	.gradient {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 84px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAABdCAMAAADNEjtLAAABEVBMVEUDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAACnjvHuAAAAW3RSTlMBAgMEBQYHCAkKCwwNDxAREhQVFhgZGxweHyEiJCUnKSosLS8xMjQ2ODk7PT5AQkNFR0hKTE5PUVNUVldZW1xeX2FiZGVnaGprbG5vcHFzdHV2d3h5ent8fX5/XoZ4lgAAAPVJREFUeAHt1AERADAQAiDdrX/mDyKEIAAAjGkDsOk3AAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECAgQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBAQIIEAAAQIseAEYdZ9sAcJDX4ICAAAAAElFTkSuQmCC);
		background-repeat: repeat-x;
	}

	.user {
		width: 100%;
		height: 68px;
		position: absolute;
		bottom: 0;
		padding-bottom: 16px;
		z-index: 1;
	}

	.avatar {
		float: left;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: 2px solid hsla(0, 0%, 100%, .4);
		margin-left: 20px;
	}

	.avatar>img {
		width: 64px;
		height: 64px;
		border-radius: 48px;
		background: #fff;
	}

	.avatar span {
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: url(../../assets/img/user-auth.png) no-repeat;
		background-position: -4px -53px;
		position: absolute;
		bottom: 18px;
		left: 68px;
	}

	.basic {
		float: left;
		width: 800px;
		height: 100%;
		margin: 10px 0 0 20px;
		color: #fff;
	}

	.name {
		float: left;
		margin-right: 5px;
		font-weight: 700;
		line-height: 18px;
		font-size: 18px;
	}

	.lv {
		display: block;
		float: left;
		width: 28px;
		height: 16px;
		background: url(../../assets/img/level.png) no-repeat;
		background-position: -21px -82px;
	}

	.spacing {
		float: left;
		display: block;
		width: 100%;
		height: 24px;
		margin-top: 8px;
		color: #d6dee4;
		font-size: 12px;
		line-height: 26px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.action {
		float: right;
		position: relative;
		top: 37px;
	}

	.attention-btn {
		color: #fff;
		float: left;
		display: block;
		width: 76px;
		height: 30px;
		background-color: #f25d8e;
		border-radius: 4px;
		line-height: 30px;
		text-align: center;
		font-size: 14px;
		box-shadow: 0 0 0 2px #fff;
		margin-right: 20px;
	}

	.message-btn {
		float: left;
		display: block;
		width: 76px;
		height: 30px;
		color: #fff;
		line-height: 30px;
		border-radius: 4px;
		text-align: center;
		font-size: 14px;
		background: rgba(0, 0, 0, .5);
		box-shadow: 0 0 0 2px hsla(0, 0%, 100%, .3);
		margin-right: 20px;
	}

	.be-dropdown-trigger {
		width: 30px;
		height: 30px;
		text-align: center;
	}

	.be-dropdown-trigger i {
		color: #fff;
		font-size: 30px;
		line-height: 30px;
	}

	.nav-inner {
		height: 66px;
		background: #fff;
		box-shadow: 0 0 0 1px #eee;
		border-radius: 0 0 4px 4px;
		padding: 0 20px;
	}

	.nav-inner a {
		float: left;
		display: block;
		height: 100%;
		line-height: 66px;
		margin-right: 16px;
	}

	.nav-inner a div {
		width: 100%;
		height: 100%;
	}

	.router-link-active {
		color: #00a1d6;
		border-bottom: 2px solid #00a1d6;
	}

	.nav-text {
		font-size: 13px;
		display: inline-block;
		line-height: 66px;
	}

	.iconfont {
		display: inline-block;
		width: 20px;
		font-size: 20px;
		margin-right: 4px;
		vertical-align: middle;
	}

	.icon-ic_home {
		color: #00c091;
	}

	.icon-ic_following {
		color: #fb7299;
	}

	.icon-ic_video {
		color: #02b5da;
	}

	.icon-ic_channel {
		color: #23c9ed;
	}

	.icon-ic_collect {
		color: #f3a034;
	}

	.num {
		margin-left: 2px;
		font-size: 12px;
		color: #99a2aa;
		font-family: Arial;
	}

	.find {
		position: relative;
		float: left;
		display: inline-block;
		width: 100px;
		height: 30px;
		vertical-align: middle;
		top: 50%;
		transform: translateY(-50%);
	}

	.find input {
		border: 1px solid #ccd0d7;
		border-radius: 15px;
		width: 100px;
		height: 100%;
		padding: 0 29px 0 10px;
		color: #222;
		line-height: 30px;
		font-size: 12px;
		outline: none;
		box-sizing: border-box;
	}

	.search {
		position: absolute;
		right: 8px;
		top: 0;
		width: 18px;
		height: 30px;
		vertical-align: middle;
		background: url(../../assets/img/icon.png) no-repeat;
		background-position: -1111px -81px;
		cursor: pointer;
	}

	.statistics {
		float: right;
		height: 100%;
	}

	.statistics a,
	.statistics span {
		display: block;
		float: left;
		height: 100%;
		width: 58px;
		padding: 15px 0;
		box-sizing: border-box;
		margin: 0;
	}

	.statistics p {
		line-height: 14px;
		font-size: 12px;
		text-align: center;
	}

	.statistics a p:first-child,
	.statistics span p:first-child {
		color: #99a2aa;
		margin-bottom: 8px;
	}

	.statistics a:hover p {
		color: #00a1d6;
	}

	.space {
		width: 100%;
	}

	.to-top {
		position: fixed;
		display: none;
		bottom: 100px;
		right: 20px;
		transform: translateY(0);
		width: 62px;
		height: 85px;
		margin-left: 602px;
		cursor: pointer;
		background-image: url("../../assets/img/space-to-top.png");
		background-position: -40px -44px;
	}

	.to-top:hover {
		background-position: -468.7px -44px;
	}
</style>
