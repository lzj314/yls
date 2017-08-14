<template>
  <div class="slide" id="slide">
    <ul>
      <li v-for="item in swiperData">
        <a href="javascript:;">
          <img :src="item.src">
        </a>
      </li>
    </ul>
    <div class="dot">
      <span v-for="item in swiperData"></span>
    </div>
  </div>
</template>
<script>
import 'n-zepto'
import './swipe.js'
export default {
  name: 'swiper',
  data() {
    return {
      swiperData: [{
        src: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg'
      }, {
        src: 'http://7xr193.com1.z0.glb.clouddn.com/2.jpg'
      }, {
        src: 'http://7xr193.com1.z0.glb.clouddn.com/3.jpg'
      }]
    }
  },
  methods: {
    initSwiper() {
      $('#slide').swipeSlide({
        autoSwipe: true, //自动切换默认是
        speed: 3000, //速度默认4000
        continuousScroll: true, //默认否
        transitionType: 'linear', //过渡动画linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier
        lazyLoad: false, //懒加载默认否
        firstCallback: function(i, sum, me) {
          me.find('.dot').children().first().addClass('cur');
        },
        callback: function(i, sum, me) {
          me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
      })
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.initSwiper()
    })
  }
}
</script>
<style scoped>
/*swipe*/

.slide {
  position: relative;
  max-width: 640px;
  overflow: hidden;
  margin: 0px auto;
}

.slide:after {
  content: '';
  display: block;
  width: 100%;
  padding-top: 50%;
}

.slide ul {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.slide li {
  list-style: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.slide li:first-child {
  z-index: 1;
}

.slide li img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.slide .slide-desc {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  overflow: hidden;
  padding: 5px;
  width: 100%;
  color: #fff;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
}

.slide .dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  z-index: 5;
  font-size: 0;
  text-align: center;
  margin: 0 auto;
}

.slide .dot span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  border: 1px solid #fff;
  border-radius: 50%;
}

.slide .dot .cur {
  background-color: #fff;
  border: 1px solid #fff;
}

.slide .txt {
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
}
</style>
