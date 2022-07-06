<template>
	<div class="video" ref="video" id="video">
		<ContributionList></ContributionList>
		<div class="video-content">
			<SubmitTitle>TA的视频</SubmitTitle>
			<Type></Type>
			<VideoList :dataList="showVideoList" ref="ivideo"></VideoList>
		</div>
	</div>
</template>

<script>
	import ContributionList from '@/components/ContributionList.vue'
	import VideoList from '@/components/VideoList.vue'
	import SubmitTitle from '@/components/SubmitTitle.vue'
	import Type from '@/components/Type.vue'
	export default {
		name: 'Video',
		data() {
			return {
				activeType: 0,
				showVideoList: [],
				videoList: [],
				cVideoList: null
			}
		},
		components: {
			ContributionList,
			VideoList,
			SubmitTitle,
			Type
		},
		created() {
			this.HttpService.get('/video', res => {
				
				this.videoList = res
				this.showVideoList = res
				if(this.$route.query.keyword){
					this.search()
				}
			}, err => {

			})


		},
		methods: {
			search() {
				// console.log("ok")
				var that = this
				var keyword = this.$route.query.keyword
				if(keyword!=''){
					var videoList = []
					this.videoList.forEach(function(v, i, a) {
						if (v.title.indexOf(keyword) != -1)
							videoList.push(v);
					})
					console.log(videoList)
					this.showVideoList = videoList
					this.videoUpdate();
				}else{
					this.showVideoList = this.videoList
				}
			},
			videoUpdate() {
				let that = this
				if (this.cVideoList == null) {
					this.$nextTick(_ => {
						that.cVideoList = this.$refs.ivideo
						console.log(that.cVideoList)
						that.cVideoList.$forceUpdate()
					})
				}else{
					this.cVideoList.$forceUpdate()
				}
			}
		},
	}
</script>

<style scoped>
	.video {
		float: left;
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
		display: flex;
	}

	.video-content {
		float: left;
		padding: 10px 19px;
		box-sizing: border-box;
		width: 1069px;
	}

	.video-list {
		float: left;
		width: 1031px;
	}

	.submit-title {
		margin: 10px 0;
	}
</style>
