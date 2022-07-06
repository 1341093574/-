<template>
	<div class="channel">
		<SubmitTitle>
			TA的频道
			<span slot="be-tab"></span>
		</SubmitTitle>
		<div class="channel-list">
			<channel-box :videos="item" v-for="item in channels"></channel-box>
		</div>
	</div>
</template>

<script>
	import SubmitTitle from '@/components/SubmitTitle.vue'
	import ChannelBox from '@/components/channelBox.vue'
	export default {
		name: 'Channel',
		components: {
			SubmitTitle,
			ChannelBox
		},
		data() {
			return {
				channels: [{
						title: "学生作品-视频",
						image: "",
						num: 0,
						time:"3-12"
					},
					{
						title: "官方宣传视频",
						image: "",
						num: 0,
						time:"4-17"
					},
					{
						title: "学生生活",
						image: "",
						num: 0,
						time:"8-12"
					}
				],

			}
		},
		created() {
			this.getVideos()
		},
		methods: {
			getVideos() {
				this.HttpService.get('/video', res => {
					var that = this
					res.forEach(function (v, i, a) {
						that.channels[v.channel].num++
						that.channels[v.channel].image = v.image
					})
				}, err => {

				})
			}
		}
	}
</script>

<style scoped>
	.channel {
		width: 1280px;
		float: left;
		padding: 20px;
		background-color: #fff;
		margin-top: 10px;
		box-sizing: border-box;
	}
</style>
