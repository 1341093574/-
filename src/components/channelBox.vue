<template>
	<div class="channel-item">
		<a href="javascript:;" class="cover">
			<img :src="videos.image">
			<div class="video-num">
				<div class="video-num-inner">
					<strong>{{videos.num}}</strong>
					<em class="icon"></em>
				</div>
			</div>
			<span class="i-watchlater no-select"></span>
		</a>
		<div class="channel-meta">
			<h4 title="学生作品-视频" class="channel-name">
				{{videos.title}}
			</h4>
			<div class="channel-update-time">
				{{videos.time}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			videos: {
				type: Object
			},
		},
	}
</script>

<style scoped>

	.channel-item {
		float: left;
		width: 160px;
		margin: 20px 20px 0 0
	}

	.channel-item:hover .i-watchlater {
		display: block
	}

	.channel-item:nth-of-type(6n) {
		margin-right: 0
	}

	.channel-item .cover {
		position: relative;
		display: block;
		width: 100%;
		height: 100px;
		border-radius: 3px;
		overflow: hidden;
		background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/video-placeholder.png);
		background-position: 50%;
		background-size: cover
	}

	.channel-item .cover img {
		display: block;
		width: 100%;
		height: 100%
	}

	.channel-item .cover .video-num {
		position: absolute;
		top: 0;
		right: 0;
		width: 70px;
		height: 100%;
		color: #e5e9ef;
		text-align: center;
		font-size: 12px;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, .6)
	}

	.channel-item .cover .video-num-inner {
		position: absolute;
		top: 50%;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		transform: translateY(-50%);
		white-space: nowrap
	}

	.channel-item .cover .video-num strong {
		display: block;
		line-height: 30px;
		font-size: 18px;
		color: #fff;
		font-weight: 400;
		font-family: Arial
	}

	.channel-item .cover .video-num em {
		display: block;
		height: 20px;
		margin-top: 4px;
		background-position: -1223px -151px
	}

	.channel-item .channel-meta {
		height: 55px
	}

	.channel-item .channel-name {
		max-height: 36px;
		line-height: 18px;
		margin-top: 5px;
		color: #222;
		overflow: hidden
	}

	.channel-item .channel-update-time {
		line-height: 14px;
		height: 14px;
		margin-top: 5px;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.channel-create {
		height: 100px
	}

</style>
