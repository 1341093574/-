<template>
	<div class="album">
		<ContributionList></ContributionList>
		<div class="albumContent">
			<SubmitTitle>
				TA的相簿
				<span slot="be-tab"></span>
			</SubmitTitle>
			<Type></Type>
			<PhotoAlbumList :imgSize="imgSize"></PhotoAlbumList>
		</div>
	</div>
</template>

<script>
	import ContributionList from '@/components/ContributionList.vue'
	import SubmitTitle from '@/components/SubmitTitle.vue'
	import Type from '@/components/Type.vue'
	import PhotoAlbumList from '@/components/PhotoAlbumList.vue'
	export default{
		name:'Album',
		data(){
			return{
				imgSize:{
					width:'190px',
					height:'140px'
				}
			}
		},
		components:{
			ContributionList,
			SubmitTitle,
			Type,
			PhotoAlbumList
		}
	}
</script>

<style scoped>
	.album{
		float: left;
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
	}
	.albumContent{
		float: left;
		padding: 10px 19px;
		box-sizing: border-box;
		width: 1069px;
	}
	.submit-title{
		margin: 10px 0;
	}
	.type{
		margin: 5px 0;
	}
	.favorites-list{
		float: left;
		margin-top: 10px;
	}
</style>
