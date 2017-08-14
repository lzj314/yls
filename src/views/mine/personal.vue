<template>
	<div class="yls-login">
		<top-bar :title="titleData"></top-bar>
		<div class="isLogin" v-if="isLogin===true">
			<div class='login-title'>		
					<img src="./images/login_default.png">
				<h3>未登录</h3>
			</div>
			<div class='login-content'>
				<p>您还没有登录，请先：</p>
				<button>点击登录</button>
			</div>
		</div>
		<div class="yls-login" v-else>
			<div class='login-title'>
				<div class='circle_header'>
					<img src="./images/userImage.png">
				</div>
				<h3>{{userInfo.name}}</h3>
			</div>
			<p class="content_title">已购买的课程</p>
			<course-item v-for="(item, index) in userInfo.courseItemData" :key="index" :imgsrc="item.imgsrc" :title="item.title" :status="item.status" :people="item.people" :price="item.price" :to="item.to" class="courseItem"></course-item>
			<div class="phone">
				<span>客服热线：020-88888888</span>
				<i class="iconfont">&#xe603;</i>
			</div>
		</div>
		<alert-tip v-show="true" :content="loginAlertTip" :quick="quickData"></alert-tip>
	</div>

</template>
<script>
import TopBar from '@/components/topbar'
import courseItem from '@/components/course-item/index'
import alertTip from '@/components/alertTip.vue'
	export default {
		data(){
			return {
				titleData:'个人中心',
				loginAlertTip:'您还没有登录',
				quickData:'立即登录',
				isLogin:false,
			    userInfo:{
			      	id:'111',
			      	name:'lzj',
			      	src:'./images/userImage.png',
			      	courseItemData: [{
			        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
			        title: '倚天屠龙记苏有朋版全集',
			        status: 1,
			        people: 1000,
			        price: 123,
			        to: 'course'
			      }, {
			        imgsrc: 'imgSrc2',
			        title: '笑傲江湖吕颂贤TVB版全集',
			        status: 1,
			        people: 4444,
			        price: 1224323,
			        to: 'case'
			      }],			     
			    }
			}
		},
		components:{
			TopBar,
			courseItem,
			alertTip
		}
	}
</script>
<style scoped> 
	@font-face {
		  font-family: 'iconfont';  /* project id 295199 */
		  src: url('//at.alicdn.com/t/font_295199_nmlo14m22bwng66r.eot');
		  src: url('//at.alicdn.com/t/font_295199_nmlo14m22bwng66r.eot?#iefix') format('embedded-opentype'),
		  url('//at.alicdn.com/t/font_295199_nmlo14m22bwng66r.woff') format('woff'),
		  url('//at.alicdn.com/t/font_295199_nmlo14m22bwng66r.ttf') format('truetype'),
		  url('//at.alicdn.com/t/font_295199_nmlo14m22bwng66r.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:18px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
}
	.yls-login {
		width: 100%;
		background: #f0f0f0;
	}
	.login-title {
		height: 150px;
		width: 100%;
		text-align: center;
		padding: 25px 0;
		box-sizing: border-box;
		background: -webkit-linear-gradient(top,#3aae80,#46dda1);
		color: #fff;
		font-size: 18px;
	}
	.login-title img {
		width: 80px;
		margin-bottom: 5px;
	}
	.circle_header {
		width: 80px;
		height: 80px;
		border-radius: 40px;
		overflow: hidden;
		margin: 0 auto;
		margin-bottom: 5px;
	}
	.content_title {
		padding: 10px 10px; 
		border-bottom: 1px solid #ccc;
		color: #999;
		font-size: 14px;
		background: #fff;
	}
	.login-content {
		width: 100%;
		text-align: center;
		color: #999;
		padding: 100px 20px;
		box-sizing: border-box;

	}
	.courseItem {
		background: #fff;
		border-bottom: 1px solid #ccc;
	}
	.login-content button {
		padding: 20px 0;
		width: 100%;
		color: #fff;
		font-size: 19px;
		background: #46dda1;
		border: none;
		outline: none;
		margin-top: 20px;
	}
	.phone {
		background: #fff;
		margin-top: 10px;
		padding: 5px 10px;
		color: #999;
		border-bottom: 1px solid #ccc;
		font-size: 15px;
		display: flex;
		justify-content: space-between;
	}
</style>