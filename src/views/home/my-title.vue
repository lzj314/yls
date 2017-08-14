<template>
  <div class="my-title g-border-bottom">
    <span class="left">{{title}}</span>
    <router-link href="javascript:;" :to="to" class="right">
      <span class="more">更多</span>
      <img src="./img/index_arrow_grey@2.png" class="arr">
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'my-title',
  data() {
    return {

    }
  },
  props: {
    title: String,
    to: String
  }
}
</script>
<style scoped>
.my-title {
  padding: 13px 10px;
  background-color: rgb(254, 250, 241);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  border-left: 4px solid rgb(217, 217, 217);
  padding-left: 8px;
  color: #333;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
}

.right {
  color: #999;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 42px;
}
.arr {
  margin-left: 8px;
  height: 14px;
}
</style>
