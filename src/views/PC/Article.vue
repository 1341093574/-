<template>
	<div class="article">
		<ContributionList></ContributionList>
		<div class="articleContent">
			<SubmitTitle>专栏文章</SubmitTitle>
		</div>
	</div>
</template>

<script>
	import ContributionList from '@/components/ContributionList.vue'
	import SubmitTitle from '@/components/SubmitTitle.vue'
	export default{
		name:'Article',
		components:{
			ContributionList,
			SubmitTitle
		}
	}
</script>

<style scoped>
	.article{
		float: left;
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
	}
	.articleContent{
		float: left;
		padding: 10px 19px;
		box-sizing: border-box;
		width: 1069px;
	}
	.submit-title{
		margin: 10px 0;
	}
</style>
