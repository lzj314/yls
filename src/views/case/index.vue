<template>
  <div class="case weui-tab__panel">
    <top-bar :title="titleData"></top-bar>
    <case-item v-for="(item, index) in caseItemData" :key="index" :imgsrc="item.imgsrc" :title="item.title" :status="item.status" :people="item.people" :price="item.price" :to="item.to"></case-item>
  </div>
</template>
<script>
import CaseItem from '@/components/case-item'
import TopBar from '@/components/topbar.vue'
export default {
  name: 'case',
  components: {
    CaseItem,
    TopBar
  },
  data() {
    return {
      titleData:'学生案例',
      caseItemData: [
      {
        imgsrc: 'http://7xr193.com1.z0.glb.clouddn.com/1.jpg',
        title: '鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记鹿鼎记',
        status: 0,
        people: 1000,
        price: 123,
        to: 'course'
      },
      {
        imgsrc: 'imgSrc2',
        title: '倚天屠龙记倚天屠龙记倚天屠龙记倚天屠龙记倚天屠龙记倚天屠龙记',
        status: 1,//已购
        people: 4444,
        price: 1224323,
        to: 'case'
      }
      ]
    }
  }
}
</script>
<style scoped>
</style>
