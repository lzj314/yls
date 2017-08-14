<template>
	<div class='payfor_list'>
		<top-bar :title="titleData"></top-bar>
		<p>订单信息</p>
		<case-item :imgsrc="thingsData.imgsrc" :title="thingsData.title" :to="thingsData.to"></case-item>
	</div>
</template>
<script>
import TopBar from './topbar.vue'
import CaseItem from './case-item/'
	export default {
		data(){
			return{
				titleData:'xxx国学院',
				thingsData:{
					imgsrc:"http://7xr193.com1.z0.glb.clouddn.com/1.jpg",
					title:'鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记',
					to:'course'
				}
			}
		},
		components:{
			TopBar,
			CaseItem
		}
	}
</script>
<style scoped>
	
</style>