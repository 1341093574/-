<template>
	<div id="dynamic">
		<ul>
			<li v-for="item in items">
				<dynamic-card :item="item"></dynamic-card>
			</li>
		</ul>
	</div>
</template>

<script>
	import dynamicCard from '@/components/dynamicCard.vue'
	var image = require("@/assets/img/96f69ca9c5cc581eb7546866f38e10056e5ef6cc.png");
	export default {
		components: {
			dynamicCard
		},
		data() {
			return {
				items: []
			}
		},
		created() {
			this.getAction()
		},
		methods:{
			getAction(){
				this.HttpService.get("/action",res=>{
					this.items = res
				},err=>{
					
				})
			}
		}
	}
</script>

<style scoped>
</style>
