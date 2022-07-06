<template>
	<div class="dynamic">
		<div class="card" v-for="item in actions">
			<div class="card-list">
				<a class="user-avatar" href="javascript:;">
					<img src="../../assets/img/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg_64x64.jpg">
					<span></span>
				</a>
				<div class="main-content">
					<div class="user-name">
						<a href="javascript:;" class="hover-blue">茂职院计算机工程系</a>
					</div>
					<div class="time">
						<a href="javascript:;" class="hover-pink">
							{{item.time}}
						</a>
					</div>
					<div class="card-content">
						<div class="text p-rel description">
							<div class="content">
								<div class="content-full">{{item.content}}</div>
							</div>
						</div>

						<div class="imagesbox">
							<div class="zoom-wrap">
								<ul class="zoom-list list-none zoom-3">
									<li class="card card-3" v-for="image in item.images">
										<div class="img-content" :style="'background-image: url('+image+')'">
										</div>

									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<span class="hover-pink">
							<i class="iconfont icon-fenxiang"></i>
							{{item.tramsmit}}
						</span>
						<span class="hover-pink">
							<i class="iconfont icon-pinglun"></i>
							{{item.comment}}
						</span>
						<span class="hover-pink">
							<i class="iconfont icon-dianzan"></i>
							{{item.zan}}
						</span>
					</div>
					<span class="more hover-blue">
						<i class="iconfont icon-ic_more"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Dynamic',
		data() {
			return {
				actions: []
			}
		},
		created() {
			this.getAction()
		},
		methods: {
			getAction() {
				this.HttpService.get('/action', res => {
					this.actions = res
				}, err => {

				})
			}
		}
	}
</script>

<style scoped>
	@import url("../../assets/font/font_438759_kmvtb0te1nd.css");



	.dynamic {
		width: 920px;
	}

	.card {
		border: 1px solid #eee;
		border-radius: 4px;
	}

	.user-avatar {
		position: absolute;
		top: 27px;
		left: 24px;
		display: block;
		width: 48px;
		height: 48px;
	}

	.user-avatar img {
		width: 100%;
		height: 100%;
	}

	.user-avatar span {
		display: block;
		position: absolute;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		font-style: normal;
		background: url(../../assets/img/user-auth.png) no-repeat;
		background-position: -4px -82px;
		bottom: 0px;
		right: 0px;
	}

	.card-list {
		position: relative;
		margin-top: 10px;
		background: #fff;
		padding-bottom: 5px;
	}

	.main-content {
		width: 534px;
		padding-top: 27px;
		margin-left: 88px;
	}

	.user-name a {
		font-weight: 400;
	}

	.time {
		margin-top: 5px;
	}

	.time a {
		color: #99a2aa;
		font-size: 12px;
	}

	.hover-pink:hover {
		color: #fb7299;
	}

	.hover-blue:hover {
		color: #00a1d6;
	}

	.card-content {
		width: 532px;
		margin-top: 10px;
		box-sizing: border-box;
		padding-right: 0;
		padding-bottom: 20px;
	}

	.description {
		max-width: 100%;
		display: inline-block;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 22px;
		word-wrap: break-word;
	}

	.text {
		font-size: 14px;
		letter-spacing: 0.5px;
	}

	.p-rel {
		position: relative;
	}

	.content-full {
		width: 100%;
		word-break: break-word;
		word-wrap: break-word;
	}

	.imagesbox {
		width: 518px;
		user-select: none;
		text-align: center;
	}

	.imagesbox .zoom-wrap .zoom-list.zoom-3 {
		width: 456px;
	}

	.imagesbox .zoom-wrap .zoom-list {
		line-height: 0;
		text-align: left;
		margin-top: -4px;
		margin-left: -4px;
		vertical-align: top;
	}

	.imagesbox .zoom-wrap .zoom-list .card {
		width: 104px;
		height: 104px;
		margin: 4px 0 0 4px;
		display: inline-block;
		vertical-align: top;
		overflow: hidden;
		border-radius: 4px;
		position: relative;
		cursor: -webkit-zoom-in;
		cursor: zoom-in;
	}

	.view-danmaku {
		float: left;
		width: 298px;
	}

	.view-danmaku div {
		float: left;
		font-size: 12px;
		width: 55px;
		color: #999;
		margin-right: 4px;
		margin-top: 10px;
	}

	.card-footer {
		width: 534px;
		height: 44px;
	}

	.card-footer span {
		display: block;
		float: left;
		width: 100px;
		height: 50px;
		font-size: 12px;
		line-height: 50px;
		color: #999;
		cursor: pointer;
	}

	.more {
		position: absolute;
		color: #ccd0d7;
		font-size: 30px;
		top: 30px;
		right: 20px;
		width: 16px;
		cursor: pointer;
	}

	.more .iconfont {
		font-size: 30px;
		width: 100%;
		height: 100%;
	}

	.img-content{
		background: #fff center/cover no-repeat;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
</style>
