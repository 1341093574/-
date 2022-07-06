<template>
	<div class="type">
		<span class="hover-blue" @click="activeType=0" :class="{'active-type':activeType==0}">
			全部
			<span class="num">20</span>
		</span>
		<!-- <span class="hover-blue" @click="activeType=1" :class="{'active-type':activeType==1}">
			全部
			<span class="num">20</span>
		</span>
		<span class="hover-blue" @click="activeType=2" :class="{'active-type':activeType==2}">
			全部
			<span class="num">20</span>
		</span> -->
	</div>
</template>

<script>
	export default {
		name:'Type',
		data(){
			return{
				activeType:0
			}
		}
	}
</script>

<style scoped>
	
	.type{
		float: left;
		width: 100%;
		height: 36px;
		background-color: #edf2f9;
		padding: 0 20px;
		box-sizing: border-box;
		border-radius: 4px;
		margin: 0px 0 10px;
		line-height: 36px;
	}
	.type>span{
		display: block;
		float: left;
		margin-right: 30px;
		height: 100%;
		font-size: 12px;
		cursor: pointer;
	}
	.num{
		color: #aaa;
		margin-left: 8px;
	}
	.type .active-type{
		color: #00a1d6;
	}
	.hover-blue:hover{
		color: #00a1d6;
	}
</style>
