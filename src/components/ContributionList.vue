<template>
	<div class="contribution-list">
		<ul>
			<li :class="{'active':nowPage==='video'}">
				<router-link to="video" :class="{'hover-blue':nowPage!='video'}">视频</router-link>
				<span>20</span>
			</li>
			<li :class="{'active':nowPage==='audio'}">
				<router-link to="audio" :class="{'hover-blue':nowPage!='audio'}">音频</router-link>
				<span>0</span>
			</li>
			<li :class="{'active':nowPage==='article'}">
				<router-link to="article" :class="{'hover-blue':nowPage!='article'}">专栏</router-link>
				<span>0</span>
			</li>
			<li :class="{'active':nowPage==='album'}">
				<router-link to="album" :class="{'hover-blue':nowPage!='album'}">相簿</router-link>
				<span>4</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'contributionList',
		data(){
			return{
				nowPage:''
			}
		},
		created() {
			this.nowPage = this.$route.path.replace('/','')
		}
	}
</script>

<style scoped>
	.contribution-list{
		float: left;
		width: 210px;
	  border-right: 1px solid #eee;
	}
	.contribution-list ul{
		float: left;
		width: 100%;
		margin-top: 10px;
	}
	.contribution-list ul li{
		list-style: none;
		float: left;
		width: 100%;
		height: 44px;
		padding-left: 30px;
		background-color: #fff;
		box-sizing: border-box;
	}
	.contribution-list li a{
		float: left;
		display: block;
		width: 130px;
		height: 100%;
		color: #222;
		line-height: 40px;
		margin-right: 5px;
		font-size: 14px;
	}
	.contribution-list li span{
		display: block;
		float: left;
		line-height: 40px;
		color: #222;
		width: 32px;
		height: 20px;
		text-align: center;
		font-size: 10px;
	}
	.contribution-list .active{
		background-color: #00a1d6;
	}
	.contribution-list .active a,.contribution-list .active span{
		color: #fff;
	}
	.hover-blue:hover{
		color: #00a1d6;
	}
</style>
