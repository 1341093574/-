<template>
	<span class="count">20</span>
</template>

<script>
	export default {
		name:'Count'
	}
</script>

<style scoped>
	.count{
		background: #f7f7f7;
		border: 1px solid #ddd;
		border-radius: 3px;
		color: #777;
		display: inline-block;
		font-size: 12px;
		line-height: 18px;
		height: 20px;
		padding: 0 5px;
		position: relative;
	}
	.count::before{
		position: absolute;
		background: url(../assets/img/icon.png);
		background-position: -215px -340px;
		content: "";
		display: block;
		left: -7px;
		top: -3px;
		height: 22px;
		width: 10px;
	}
</style>
