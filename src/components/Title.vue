<template>
	<div class="title">
		<a href="javascript:;"><slot></slot></a>
		<Count></Count>
		<slot name="more">
			<More></More>
		</slot>
		<slot name="watch-later">
			<a href="javascript:;" class="watch-later">
				稍后再看
			</a>
		</slot>
	</div>
</template>

<script>
	import More from '../components/More.vue'
	import VideoList from '../components/VideoList.vue'
	import Count from '../components/Count.vue'
	export default {
		name:'Title',
		components:{
			More,
			VideoList,
			Count
		}
	}
</script>

<style scoped>
	.title{
		float: left;
		margin-bottom: 17px;
		width: 100%;
	}
	.title a:first-child{
		float: left;
		font-size: 20px;
	}
	.title a:hover{
		color: #00a1d6;
	}
	.title .more{
		float: right;
	}
	.watch-later{
		float: right;
		display: block;
		border: 1px solid #b8c0cc;
		border-radius: 4px;
		color: #6d757a;
		font-size: 12px;
		line-height: 22px;
		transition: border .2s ease;
		padding: 0 7px 0 23px;
		background: url(../assets/img/icon.png);
		background-position: -404px -1172px;
		text-align: right;
		margin-right: 10px;
	}
	.count{
		margin-left: 11px;
		float: left;
	}
</style>
