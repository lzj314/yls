<template>
  <div class="weui-tabbar">
    <router-link v-for="(item, index) in tabbarData" :key="index" :to="item.to"  class="weui-tabbar__item" :class="{ 'weui-bar__item_on': item.to === activeRoute }" @click.native="setActive(item.to)">
      <img :src="item.activeSrc" alt="" class="weui-tabbar__icon active" v-if="item.to === activeRoute">
      <img :src="item.defaultSrc" alt="" class="weui-tabbar__icon default" v-else>
      <p class="weui-tabbar__label">{{item.title}}</p>
    </router-link>
  </div>
</template>
<script>
import home0 from './img/index_home_default@2.png'
import home1 from './img/index_home_select@2.png'
import course0 from './img/index_class_default@2.png'
import course1 from './img/index_class_select@2.png'
import case0 from './img/index_case_default@2.png'
import case1 from './img/index_case_select@2.png'
import mine0 from './img/index_user_default@2.png'
import mine1 from './img/index_user_select@2.png'
export default {

  name: 'weui-tabbar',

  data() {
    return {
      activeRoute: '',
      tabbarData: [{
        title: '首页',
        to: '/home',
        defaultSrc: home0,
        activeSrc: home1
      }, {
        title: '课程',
        to: '/course',
        defaultSrc: course0,
        activeSrc: course1
      }, {
        title: '案例',
        to: '/case',
        defaultSrc: case0,
        activeSrc: case1
      }, {
        title: '我的',
        to: '/mine',
        defaultSrc: mine0,
        activeSrc: mine1
      }, ]
    }
  },
  methods: {
    setActive(path) {
      if (['/home', '/course', '/case', '/mine'].indexOf(path) > -1) {
        this.activeRoute = path
      }
    }
  },
  watch: {
    $route: function(to, from) {
      this.setActive(to.path)
    }
  },
  created() {
    this.setActive(this.$route.path)
  }
}
</script>
<style lang="css" scoped>
.weui-tabbar__icon {
  box-sizing: border-box;
  padding: 3px;
  margin-left: -2px;
}
.weui-tabbar__item .weui-tabbar__label {
  color: #999999;
}

.weui-bar__item_on .weui-tabbar__label {
  color: #d2a66b;
}
</style>
