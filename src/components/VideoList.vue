<template>
	<div class="video-list">
		<ul>
			<li v-for="item in dataList">
				<a href="javascript:;">
					<div class="vImgBox">
						<img :src="item.image">
						<span class="length">{{item.length}}</span>
					</div>

					<div class="title">{{item.title}}</div>
				</a>
				<span>
					<i class="iconfont icon-ic_play"></i>
					{{item.play}}
				</span>
				<span>
					<i class="iconfont icon-ic_time"></i>
					{{item.time}}
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'VideoList',
		props: {
			dataList: {
				type: Array,
			},
		},
	}
</script>

<style scoped>
	@import url("../assets/font/font_438759_kmvtb0te1nd.css");

	.video-list ul {
		float: left;
		width: 100%;
	}

	.video-list ul li {
		float: left;
		list-style: none;
		width: 160px;
		position: relative;
		margin: 0 0 3px;
		padding: 10px;
	}

	.video-list ul li:nth-child(5n+1) {
		padding-left: 0;
	}

	.video-list ul li:nth-child(5n) {
		padding-right: 0;
	}

	.video-list ul li img {
		width: 160px;
		height: 100px;
	}

	.video-list ul li a .title {
		display: block;
		line-height: 20px;
		height: 38px;
		margin-top: 6px;
		overflow: hidden;
		font-size: 12px;
	}

	.video-list ul li a {
		display: block;
	}

	.video-list ul li a:hover {
		color: #00a1d6;
	}

	.video-list ul li>span {
		display: block;
		float: left;
		color: #999;
		font-size: 12px;
		width: 72px;
		margin-top: 6px;
	}

	.iconfont {
		font-size: 12px;
	}
	
	.vImgBox{
		width: 160px;
		height: 100px;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}

	.length {
		display: block;
		color: #fff;
		padding: 2px 6px;
		position: absolute;
		font-size: 12px;
		background: rgba(0, 0, 0, .5);
		border-radius: 5px 0 0 0;
		bottom: 0px;
		right: 0px;
	}
</style>
