<template>
  <div class="mine weui-tab__panel">
    <top-bar :title="titleData"></top-bar>
      <video id="my-video" poster="http://7xr193.com1.z0.glb.clouddn.com/test.jpg" data-config='{"mediaTitle": "《疯狂动物城》--来自Yoby七牛视频"}' controls style="object-fit:fill" x-webkit-airplay="true" x5-video-orientation="landscape|portrait" x5-video-player-type="h5" x5-video-player-fullscreen="true" webkit-playsinline playsinline>
        <source src="http://7xr193.com1.z0.glb.clouddn.com/test.mp4" type="video/mp4"> 您的浏览器不支持HTML5视频
      </video>
    <div class="course_title">
      <p>易中天老师带你品三国</p>
      <span>2658人在学</span>
      <span>15课时</span>
      <span>￥299.00</span>
    </div>
    <ul class="course_list">
      <li v-for="(item,index) in courseList">
        <span>第{{item.order}}课：{{item.title}} </span>
        <span>{{item.desc}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import $ from 'n-zepto'
import "@/assets/video.css"
import '@/assets/video.js'
import TopBar from '@/components/topbar.vue'
export default {
  name: 'mine',
  data() {
    return {
      titleData:'课程播放',
      coursedetail:{
        id:100,
        title:'易中天老师带你品三国',
        price:299,
        times:15,
        people:2658
      },
      courseList:[
      {
        order:1,
        id:1001,
        title:'奸雄之谜',
        desc:'免费试看',
      },
      {
        order:2,
        id:1002,
        title:'真假曹操',
        desc:'未购买'
      },
      {
        order:3,
        id:1003,
        title:'能臣之路',
        desc:'未购买'
      },
      {
        order:4,
        id:1004,
        title:'鬼使神差',
        desc:'未购买'
      },
      {
        order:5,
        id:1005,
        title:'一决雌雄',
        desc:'未购买'
      },
      {
        order:6,
        id:1006,
        title:'天妒英才',
        desc:'未购买'
      }
      ]
    }
  },
  components:{
    TopBar
  },
  mounted() {
    var test_video = document.getElementById('my-video')
    this.$nextTick(function() {
      // zymedia('video', {
      //   preload: 'auto'
      // });

    })

    window.onresize = function() {
      test_video.style.width = window.innerWidth + "px";
      test_video.style.height = window.innerHeight + "px";
    }
  }
}
</script>
<style scoped>
#my-video {
  width: 100%;
}
</style>
