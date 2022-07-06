<template>
	<div class="photo-album-list">
		<ul>
			<li :style="{width:imgSize.width}">
				<a href="javascript:;">
					<img :style="{width:imgSize.width,height:imgSize.height}" src="../assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png">
					<span class="length">1P</span>
					<div>广东省高校心理剧大赛一等奖——《你值得真正的快乐》</div>
				</a>
				<span>
					<i></i>
					123
				</span>
				<span>
					<i></i>
					4-30
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'PhotoAlbumList',
		props:['imgSize']
	}
</script>

<style scoped>
	.photo-album{
		float: left;
		width: 100%;
	}
	.photo-album-list{
		float: left;
		width: 100%;
	}
	.photo-album-list ul{
		float: left;
		width: 100%;
	}
	.photo-album-list ul li{
		float: left;
		list-style: none;
		width: 160px;
		margin: 0 0 3px;
		padding: 10px;
	}
	.photo-album-list ul li:nth-child(5n+1){
		padding-left: 0;
	}
	.photo-album-list ul li:nth-child(5n){
		padding-right: 0;
	}
	.photo-album-list ul li img{
		width: 160px;
		height: 120px;
	}
	.photo-album-list ul li a div{
		display: block;
		line-height: 20px;
		height: 38px;
		margin-top: 6px;
		overflow: hidden;
		font-size: 12px;
	}
	.photo-album-list ul li a{
		display: block;
		position: relative;
	}
	.photo-album-list ul li a:hover{
		color: #00a1d6;
	}
	.photo-album-list ul li>span{
		display: block;
		float: left;
		color: #999;
		font-size: 12px;
		width: 72px;
		margin-top: 6px;
	}
	.photo-album-list ul li i{
		display: inline-block;
		width: 16px;
		height: 14px;
		margin-right: 3px;
		background: url(../assets/img/icon.png) no-repeat;
		background-position: -472px -282px;
	}
	.photo-album-list ul li span:nth-child(2) i{
		background-position: -345px -282px;
	}
	.photo-album-list .iconfont{
		font-size: 12px;
	}
	.photo-album-list .length{
		display: block;
		color: #fff;
		padding: 2px 6px;
		position: absolute;
		font-size: 12px;
		background: rgba(36,33,46,.3);
		border-radius: 5px 0 0 0;
		bottom: 53px;
		right: 10px;
		border-radius: 5px;
	}
</style>
