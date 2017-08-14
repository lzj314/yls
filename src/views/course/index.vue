<template>
  <div class="course weui-tab__panel">
    <top-bar :title="titleData"></top-bar>
    <Swiper></Swiper>
    <course-item v-for="(item, index) in courseItemData" :key="index" :imgsrc="item.imgsrc" :title="item.title" :status="item.status" :people="item.people" :price="item.price" :to="item.to"></course-item>
  </div>
</template>
<script>
import CourseItem from '@/components/course-item'
import Swiper from '../home/swiper.vue'
import TopBar from '@/components/topbar.vue'
export default {
  name: 'course',
  components: {
    CourseItem,
    Swiper,
    TopBar
  },
  data() {
    return {
      titleData:'我的课程',
      courseItemData: [
      {
        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
        title: '倚天屠龙记苏有朋版全集',
        status: 0,
        people: 1000,
        price: 123,
        to: 'course'
      },
      {
        imgsrc: 'imgSrc2',
        title: '笑傲江湖吕颂贤TVB版全集',
        status: 1,
        people: 4444,
        price: 124323,
        to: 'case'
      },
      {
        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
        title: '神雕侠侣李若彤TVB版全集',
        status: 0,
        people: 2222,
        price: 1223,
        to: ''
      },
      {
        imgsrc: 'imgSrc2',
        title: '鹿鼎记陈小春TVB版全集',
        status: 0,
        people: 23333,
        price: 12243,
        to: ''
      },
      {
        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
        title: '射雕英雄传86TVB版全集',
        status: 0,
        people: 4321,
        price: 4232,
        to: ''
      },
      ]
    }
  }
}
</script>
<style scoped>

</style>
