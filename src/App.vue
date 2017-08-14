<template>
  <div id="app">
    <div class="main-page weui-tab" :class="{'hideLeft': $route.path.split('/').length>2}">
      <keep-alive>
        <router-view name="default" class="app-content"></router-view>
      </keep-alive>
      <!--底部导航 路由 -->
      <weui-tabbar class="app-footer"></weui-tabbar>
    </div>
    <!--其他页集合 有过渡效果-->
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
  </div>
</template>
<script>
import WeuiTabbar from "@/components/weui-tabbar"
export default {
  name: 'app',
  components: {
    WeuiTabbar
  },
  data() {
    return {
      enterAnimate: 'animated slideInRight',
      leaveAnimate: 'animated slideOutRight'
    }
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementById('loading').style.display = 'none'
    });
  }
}
</script>
<style>
[v-cloak] {
  display: none;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
  /*IE/7/6*/
}


/* reset */

html,
body {
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

body,
#app {
  background-color: #F8F8F8;
  height: 100%;
}

.main-page {
  transition: 0.3s;
}

.main-page.hideLeft {
  transform: translate3d(-25%, 0, 0);
}

.sub-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #F8F8F8;
  box-shadow: 0px 0px 10px #999;
}

.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  animation-name: slideOutRight;
}

.g-border-top,
.g-border-bottom {
  position: relative;
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .g-border-top:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .g-border-bottom:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>
