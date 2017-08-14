<template>
	<div class='header'>
  <div class='goback' @click="gotoHome">&lt; 返回</div>
		{{title}}
	</div>
</template>
<script>
	export default {
		props:['title'],
    methods:{
      gotoHome(){
        this.$router.push({path:'/home'})
      }
    }
	}
</script>
<style scoped>
.header {
  color: rgb(172, 32, 17);
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  position: relative;
}
.goback {
  width: 60px;
  height: 40px;
  position: absolute;
  text-align: center;
  line-height: 40px;
  color: #666;
  top: 5px;
  left: 0;
  font-size: 16px;
}
</style>