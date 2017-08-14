<template>
	<div class="alertTip_main">
		<p class="content">{{content}}</p>
		<div class="alert_bottom">
			<span>取消</span>
			<span>{{quick}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		props:['content','quick']
	}
</script>
<style scoped>
	.alertTip_main {
		width: 200px;
		background: skyblue;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -100px;
		margin-top: -75px;
	}
	.content {
		padding: 20px;
		line-height: 20px;
		font-size: 15px;
		color: #666;
		text-align: center;
		border-bottom: 1px solid #999;
	}
	.alert_bottom {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.alert_bottom span {
		width: 49.9%;
		text-align: center;
		padding: 10px 0;
		color: #666;
		font-size: 15px;
	}
	.alert_bottom span:first-child {
		border-right: 1px solid #999;
	}
</style>