<template>
	<div class="home">
		<div class="left">
			<div class="video">
				<div class="video-title">
					<a href="javascript:;" class="t">
						TA的视频
					</a>
					<Count></Count>
					<div class="tab">
						<ul>
							<li>
								<span :class="{'is-active':activeNum===0}" @click="activeNum=0">最新发布</span>
							</li>
							<li>
								<span :class="{'is-active':activeNum===1}" @click="activeNum=1">最多播放</span>
							</li>
							<li>
								<span :class="{'is-active':activeNum===2}" @click="activeNum=2">最多收藏</span>
							</li>
						</ul>
					</div>
					<More></More>
				</div>
				<VideoList :dataList="VideoList"></VideoList>
			</div>
			<div class="column">
				<a href="javascript:;">TA的专栏</a>
			</div>
			<div class="content">
				<Title>学生作品-视频</Title>
				<div class="content-item">
					<a href="javascript:;">
						<img src="../../assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png">
						<span class="length">07:33</span>
					</a>
					<div>
						<a href="javascript:;" class="title">
							【学生作品】16级数字媒体1班 陈佩璇——《逐流》
						</a>
						<span>
							<i class="iconfont icon-ic_play"></i>
							123
						</span>
						<span>
							<i class="iconfont icon-ic_time"></i>
							4-30
						</span>
						<div style="clear: both;"></div>
						<p>==学生创作不易,请多多鼓励哦!</p>
					</div>
				</div>
			</div>
			<div class="favorites">
				<Title>
					TA的收藏夹
					<div slot="watch-later"></div>
				</Title>
				<div class="favorites">
					<ul>
						<li>
							<a href="javascript:;">
								<img src="../../assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png">
								<span>2</span>
								<div>默认收藏夹</div>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="../../assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png">
								<span>2</span>
								<div>默认收藏夹</div>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="../../assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png">
								<span>2</span>
								<div>默认收藏夹</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="photo-album">
				<Title>
					TA的相簿
					<div slot="watch-later"></div>
				</Title>
				<PhotoAlbumList :imgSize="imgSize"></PhotoAlbumList>
			</div>
		</div>
		<div class="right">
			<div class="section">
				<div class="user-auth">
					<span></span>
					<div>bilibili机构认证：茂职计算机系官方账号</div>
				</div>
			</div>
			<div class="section">
				<h3>公告</h3>
				<div class="section-content">=3=进来了不关注一下吗？</div>
			</div>
			<div class="section">
				<h3>
					直播间
					<span class="live-fo-count">233</span>
					<span class="live-fo-btn">关注直播间</span>
				</h3>
				<div class="live-unfod">
					<p>主播不在，关注后就能在动态收到开播的通知哦~</p>
					<a href="javascript:;">
						前往TA的直播间
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Count from '@/components/Count.vue'
	import More from '@/components/More.vue'
	import VideoList from '@/components/VideoList.vue'
	import Title from '@/components/Title.vue'
	import PhotoAlbumList from '@/components/PhotoAlbumList.vue'
	export default {
		name:'Home',
		data(){
			return{
				activeNum:0,
				VideoList:[],
				imgSize:{
					width:'160px',
					height:'120px'
				}
			}
		},
		components:{
			Count,
			More,
			VideoList,
			Title,
			PhotoAlbumList
		},
		created() {
			this.getVideos()
		},
		methods:{
			b(){
				this.aa = '1asdas'
			},
			getVideos(){
				this.HttpService.get('/video',res=>{
					this.VideoList = res
				},err=>{
					
				})
			}
		}
	}
</script>

<style scoped>
	@import url("../../assets/font/font_438759_kmvtb0te1nd.css");
	.home{
		width: 1280px;
		height: 1000px;
		padding-top: 10px;
	}
	.left{
		float: left;
		width: 880px;
		padding: 20px 20px;
		background: #fff;
		border: 1px solid #eee;
		border-radius: 4px;
	}
	.right{
		float: right;
		width: 350px;
	}
	.video{
		float: left;
		width: 100%;
	}
	.video-title{
		float: left;
		margin-bottom: 15px;
		width: 100%;
	}
	.t:hover{
		color: #00a1d6;
	}
	.t{
		float: left;
		display: inline-block;
		vertical-align: middle;
		font-size: 20px;
	}
	.count{
		margin-left: 11px;
		float: left;
	}
	.more{
		float: right;
	}
	.tab{
		float: left;
		margin-left: 10px;
		font-size: 12px;
		height: 28px;
	}
	.tab ul{
		float: left;
		height: 100%;
	}
	.tab ul li {
		list-style: none;
		float: left;
		height: 100%;
		margin-right: 15px;
	}
	.tab ul li span{
		display: block;
		float: left;
		height: 100%;
		line-height: 18px;
		cursor:pointer;
	}
	.is-active{
		color: #00a1d6;
		border-bottom: 1px solid #00a1d6;
	}
	.video-list{
		float: left;
		width: 100%;
		margin-bottom: 10px;
	}
	.column{
		float: left;
		padding: 15px 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin-bottom: 17px;
	}
	.column a{
		display: inline-block;
		vertical-align: middle;
		font-size: 20px;
	}
	.column a:hover{
		color: #00a1d6;
	}
	.content{
		float: left;
		width: 100%;
		margin-bottom: 17px;
	}
	
	.content-title .watch-later{
		float: right;
		display: block;
		border: 1px solid #b8c0cc;
		border-radius: 4px;
		color: #6d757a;
		font-size: 12px;
		line-height: 22px;
		transition: border .2s ease;
		padding: 0 7px 0 23px;
		background: url(../../assets/img/icon.png);
		background-position: -404px -1172px;
		text-align: right;
		margin-right: 10px;
	}
	.content-item{
		float: left;
		width: 100%;
		padding-bottom: 17px;
		border-bottom: 1px solid #eee;
	}
	.content-item img{
		float: left;
		width: 160px;
		height: 100px;
	}
	.content-item a{
		float: left;
		position: relative;
	}
	.content-item a  span{
		display: block;
		color: #fff;
		padding: 2px 6px;
		position: absolute;
		font-size: 12px;
		background: rgba(0,0,0,.5);
		border-radius: 5px 0 0 0;
		bottom: 0;
		right: 0;
	}
	.content-item>div{
		float: left;
		width: 300px;
		margin-left: 10px;
	}
	.content-item .title{
		font-size: 12px;
		color: #999;
	}
	.content-item>div>span{
		display: block;
		color: #999;
		font-size: 12px;
		width: 72px;
		margin-top: 6px;
		float: left;
		margin-top: 10px;
	}
	.content-item .iconfont{
		font-size: 12px;
		color: #999;
	}
	.content p{
		font-size: 12px;
		color: #999;
		margin-top: 10px;
	}
	.favorites{
		width: 100%;
		float: left;
		margin-bottom: 18px;
		padding-bottom: 15px;
		border-bottom: 1px solid #eee;
	}
	.section{
		float: left;
		background: #fff;
		border: 1px solid #eee;
		border-radius: 4px;
		padding: 15px 20px 18px;
		margin-bottom: 10px;
		width: 100%;
		box-sizing: border-box;
	}
	.user-auth{
		float: left;
		width: 100%;
	}
	.user-auth span{
		display: block;
		float: left;
		width: 22px;
    height: 23px;
    background-image: url(../../assets/img/user-auth.png);
    background-repeat: no-repeat;
    vertical-align: bottom;
		background-position: -1px -50px;
	}
	.user-auth div{
		float: left;
		line-height: 20px;
		display: inline-block;
		font-size: 14px;
		color: #222;
		vertical-align: middle;
		line-height: 23px;
		margin-left: 5px;
	}
	.section h3{
		border-bottom: 1px solid #e5e9ef;
		font-size: 14px;
		font-weight: 700;
		padding: 0;
		margin: -15px 0 10px;
		height: 45px;
		line-height: 45px;
	}
	.favorites ul{
		width: 100%;
	}
	.favorites li{
		list-style: none;
		float: left;
		margin-right: 23px;
	}
	.favorites li a{
		display: block;
		position: relative;
	}
	.favorites li a:first-child{
		width: 152px;
		height: 152px;
	}
	.favorites li img{
		width: 100%;
		height: 100%;
		margin-bottom: 11px;
		border-radius: 4px;
		border: 1px solid #ccd0d7;
	}
	.favorites li span{
		display: block;
		position: absolute;
		top: 10px;
		right: 10px;
		white-space: nowrap;
		background: rgba(0,0,0,.5);
		border-radius: 9px;
		width: 12px;
		padding: 0 9px;
		color: #fff;
		font-size: 12px;
		text-align: center;
	}
	.favorites li div{
		float: left;
		font-size: 18px;
		white-space: nowrap;
		font-weight: 100;
	}
	.section-content{
		font-size: 12px;
		font-weight: 400;
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		word-break: break-word;
	}
	.live-fo-btn{
		float: right;
		color: #f25d8e;
		border: 1px solid;
		border-radius: 4px 0 0 4px;
		line-height: 24px;
		text-align: center;
		width: 80px;
		font-weight: 400;
		font-size: 12px;
		margin-top: 10px;
		cursor: pointer;
	}
	.live-fo-count{
		float: right;
		border: 1px solid #dae0e9;
		border-left-width: 0;
		border-radius: 0 4px 4px 0;
		color: #99a2aa;
		line-height: 24px;
		text-align: center;
		min-width: 50px;
		font-size: 12px;
		margin-top: 10px;
		font-weight: 400;
	}
	.live-unfod{
		color: #99a2aa;
		text-align: center;
		margin: 30px 0 15px;
		font-size: 12px;
	}
	.live-unfod p{
		margin-bottom: 5px;
	}
	.live-unfod a{
		color: #00a1d6;
	}
</style>
