<template>
	<div class="card">
		<div class="cardHeader wings">
			<div class="avatar cover-img avatar">
				<i class="img">
					<img src="http://i0.hdslb.com/bfs/face/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg">
				</i>
				<i class="badge">
					<img src="http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_enterprise.png" alt="enterprise">
				</i>
			</div>

			<div class="nameBox">
				<div class="userName">
					茂职院计算机工程系
				</div>
				<p class="userExtra">{{item.time}}</p>
			</div>
		</div>

		<div class="main">
			<div class="ellipsis wings">
				<div class="content folded">
					<div class="text">{{item.content}}</div>
				</div>
			</div>
			<ul class="imageSet cover-img">
				<li v-for="item in item.images">
					<i>
						<img :src="item">
					</i>
				</li>
			</ul>
		</div>
		<ul class="footer">
			<li class="transmit"><i></i>{{item.tramsmit}}</li>
			<li class="comment"><i></i>{{item.comment}}</li>
			<li class="support"><i></i>{{item.zan}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props: {
			item: {
				type: Object,
			},
		},
	}
</script>

<style scoped>
	.cardHeader {
		display: flex;
		padding-top: 14px;
		padding-bottom: 14px;
	}

	.wings {
		padding-left: 12px;
		padding-right: 12px;
	}

	.avatar {
		position: relative;
		overflow: visible;
		width: 40px;
		height: 40px;
		margin-right: 7px;
		line-height: 40px;
	}

	.avatar .img {
		display: inline-block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		overflow: hidden;
	}

	.avatar .img img {
		width: 100%;
		height: 100%;
	}

	.avatar .badge {
		position: absolute;
		width: 18px;
		height: 18px;
		bottom: -2px;
		right: -2px;
		border-radius: 50%;
		overflow: hidden;
	}

	.cover-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
		display: block;
	}

	.nameBox {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.userName {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		font-size: 15px;
		font-weight: 500;
	}

	.userExtra {
		font-size: 12px;
		color: #999;
	}

	.imageSet {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 8px 9px 0;
	}

	.imageSet li {
		flex: 1 0 30%;
		max-width: calc(33.333333% - 6px);
		overflow: hidden;
		margin: 0 3px 6px;
	}

	.imageSet li i {
		position: relative;
		display: block;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		overflow: hidden;
		border-radius: 4px;
	}

	.imageSet li i img {
		position: absolute;
		top: 0;
		left: 0;
	}

	.cover-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
		display: block;
	}

	img {
		max-width: 100%;
	}

	.main {
		padding-bottom: 14px;
	}

	.card {
		border-bottom: 2px #f4f4f4 solid;
		background-color: #fff;
	}

	.footer {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		padding: 0 14px 12px;
		-ms-flex-pack: distribute;
		justify-content: space-around;
	}

	.footer li.transmit {
		background: url(data:image/png;base64,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) 30px center no-repeat;
		background-size: 20px;
	}

	.footer li.comment {
		background: url(data:image/png;base64,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) 30px center no-repeat;
		background-size: 20px;
	}

	.footer li.support {
		background: url(data:image/png;base64,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) 30px center no-repeat;
		background-size: 20px;
	}

	.footer li {
		flex: 1 1 33%;
		padding-left: 54px;
		font-size: 13px;
		line-height: 20px;
		color: #757575;
	}
</style>
