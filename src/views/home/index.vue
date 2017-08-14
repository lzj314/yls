<template>
  <div class="home weui-tab__panel">
    <top-bar :title="titleData"></top-bar>
    <swiper></swiper>
    <my-title title="热门课程" to="course"></my-title>
    <course-item v-for="(item, index) in courseItemData" :key="index" :imgsrc="item.imgsrc" :title="item.title" :status="item.status" :people="item.people" :price="item.price" :to="item.to"></course-item>
    <my-title title="学习案例" to="case" class="pt"></my-title>
    <case-item v-for="(item, index) in caseItemData" :key="index" :imgsrc="item.imgsrc" :title="item.title" :status="item.status" :people="item.people" :price="item.price" :to="item.to"></case-item>
    <my-title title="关于我们" to="mine" class="pt"></my-title>
    <p class="about">xxx教育机构成立于2009年，是以传承、弘扬中国传统文化为己任，运用传统国学智慧，为人们提供教育课程。旨在提高全民文化修养，弘扬国学文化。</p>
  </div>
</template>
<script>
import Swiper from './swiper.vue'
import MyTitle from './my-title.vue'
import CourseItem from '@/components/course-item'
import CaseItem from '@/components/case-item'
import TopBar from '@/components/topbar.vue'
export default {
  name: 'home',
  components: {
    Swiper,
    MyTitle,
    CourseItem,
    CaseItem,
    TopBar
  },
  data() {
    return {
      titleData: 'xxx教育学院',
      courseItemData: [{
        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
        title: '天龙八部',
        status: 0,
        people: 1000,
        price: 123,
        to: 'play'
      }, {
        imgsrc: 'imgSrc2',
        title: '笑傲江湖',
        status: 1,
        people: 4444,
        price: 1224323,
        to: 'play'
      }, ],
      caseItemData: [{
        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
        title: '射雕英雄传',
        status: 0,
        people: 1000,
        price: 123,
        to: 'case'
      }, {
        imgsrc: 'imgSrc2',
        title: '神雕侠侣',
        status: 1,
        people: 4444,
        price: 1224323,
        to: 'case'
      }, ]
    }
  }
}
</script>
<style scoped>
.pt {
  border-top: 10px solid rgb(244, 245, 247);
}

.about {
  color: #999;
  background-color: rgb(244, 245, 247);
  font-size: 12px;
  padding: 10px;
  text-align: justify;
}
</style>
