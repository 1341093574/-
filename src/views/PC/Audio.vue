<template>
	<div class="audio">
		<ContributionList></ContributionList>
		<div class="audioContent">
			<SubmitTitle>TA的音频</SubmitTitle>
		</div>
	</div>
</template>

<script>
	import ContributionList from '@/components/ContributionList.vue'
	import SubmitTitle from '@/components/SubmitTitle.vue'
	export default{
		name:'Audio',
		components:{
			ContributionList,
			SubmitTitle
		}
	}
</script>

<style scoped>
	.audio{
		float: left;
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
	}
	.audioContent{
		float: left;
		padding: 10px 19px;
		box-sizing: border-box;
		width: 1069px;
	}
	.submit-title{
		margin: 10px 0;
	}
</style>
