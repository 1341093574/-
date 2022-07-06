<template>
	<div class="submit-title">
		<h3><slot>标题</slot></h3>
		<slot name="be-tab">
			<div class="be-tab">
				<span @click="isActive=0" :class="{'is-active':isActive==0}">最新发布</span>
				<span @click="isActive=1" :class="{'is-active':isActive==1}">最多播放</span>
				<span @click="isActive=2" :class="{'is-active':isActive==2}">最多收藏</span>
			</div>
		</slot>
	</div>
</template>

<script>
	export default {
		name:'SubmitTitle',
		data(){
			return{
				isActive:0
			}
		}
	}
</script>

<style scoped>
	.submit-title{
		float: left;
		width: 100%;
	}
	h3{
		float: left;
		font-weight: 400;
		color: #222;
	}
	.be-tab{
		float: right;
		font-size: 14px;
		font-weight: 400;
	}
	.be-tab span{
		display: block;
		float: left;
		margin-right: 15px;
		cursor: pointer;
		padding: 5px 0;
	}
	.is-active{
		color: #00a1d6;
		border-bottom: 1px solid #00a1d6;
	}
</style>
