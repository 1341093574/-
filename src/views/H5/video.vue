<template>
	<div>
		<ul>
			<li v-for="item in items">
				<video-card :item="item"></video-card>
			</li>
		</ul>
	</div>
</template>

<script>
	import videoCard from '@/components/videoCard.vue';
	var image = require("@/assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png");
	export default {
		components: {
			videoCard
		},
		data() {
			return {
				items: []
			}
		},
		created() {
			this.getVideo()
		},
		methods:{
			getVideo(){
				this.HttpService.get('/video',res=>{
					this.items=res
				},err=>{
					
				})
			}
		}
	}
</script>

<style scoped>
</style>
