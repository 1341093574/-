<template>
	<div class="video-item-space">
		<div class="cover">
			<img :src="item.image" class="bfs-img">
			<span class="duration">{{item.length}}</span>
		</div>
		<div class="info">
			<h3 class="title">{{item.title}}</h3>
			<div class="state">
				<span class="view"><i class="iconfont icon_shipin_bofangshu"></i>
					<span>{{item.play}}</span>
				</span>
				<span class="danmaku">
					<i class="iconfont icon_shipin_danmushu"></i>
					<span>{{item.time}}</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			item: {
				type: Object,
			},
		},
	}
</script>

<style scoped>
	.video-item-space {
		height: 24.26667vw;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		display: block;
		padding: 2.4vw 3.2vw 2.4vw 0;
		background: white;
	}

	.video-item-space .cover {
		float: left;
		width: 31.2vw;
		height: 19.46667vw;
		position: relative;
	}

	.bfs-img {
		background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/loading.png) no-repeat 50%;
		background-size: contain;
		background-color: #e7e7e7;
	}

	.video-item-space .cover img {
		width: 100%;
		height: 100%;
		border-radius: 1.06667vw;
	}

	.video-item-space .cover .duration {
		position: absolute;
		right: 1.06667vw;
		bottom: 1.06667vw;
		font-size: 3.2vw;
		padding: 0 0.53333vw;
		color: #fff;
		border-radius: 0.53333vw;
		background: rgba(0, 0, 0, .5);
	}

	.video-item-space .info {
		position: relative;
		margin-left: 34.4vw;
		height: 19.46667vw;
	}

	.video-item-space .info .title {
		font-size: 3.73333vw;
		color: #212121;
		line-height: 4.53333vw;
		font-weight: 400;
		max-height: 9.06667vw;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
	}

	.video-item-space .info .state {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 2.66667vw;
		color: #999;
		line-height: 4.53333vw;
		height: 4.53333vw;
	}
</style>
