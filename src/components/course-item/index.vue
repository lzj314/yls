<template>
  <div class="course-item g-border-bottom">
    <div class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__hd">
        <img class="weui-media-box__thumb img" :src="imgsrc" onerror="this.onerror=null; this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=='" />
      </div>
      <div class="weui-media-box__bd">
        <div class="row1 weui-flex">
          <h4 class="weui-media-box__title weui-flex__item">{{title}}</h4>
          <span class="isBuy" v-if="status===1">已购</span>
        </div>
        <div class="row2 clearfix">
          <span class="tip1">{{people}}人在学</span>
          <span class="tip2">￥{{price}}</span>
          <router-link :to="to" class="learn-btn weui-btn weui-btn_mini weui-btn_primary" href="javascript:;"><img src="./img/index_play@2.png" height="10" width="10" style="margin-right: 5px">开始学习</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'course-item',

  data() {
    return {

    }
  },
  props: {
    imgsrc: String,
    title: String,
    status: Number,
    people: Number,
    price: Number,
    to: String
  },
  methods: {

  }
}
</script>
<style lang="css" scoped>
.course-item {

}
.img{
  height: 100%;
}
.weui-media-box {
  padding: 13px 10px;
}

.weui-media-box__title {
  font-size: 16px;
  color: #333;
}

.isBuy {
  font-size: 10px;
  padding: 1px 10px;
  height: 14px;
  line-height: 14px;
  color: rgb(251, 168, 86);
  /*border: 1px solid rgb(251, 168, 86);*/
  position: relative;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .isBuy:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid rgb(251, 168, 86);
    color: rgb(251, 168, 86);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    transform: scale(0.5);
    box-sizing: border-box;
  }
}
.row1{
  align-items: center;
}
.row2 {
  margin-top: 10px;
}

.tip1 {
  font-size: 11px;
  color: #999;
}

.tip2 {
  font-size: 11px;
  color: #ea4974;
  margin-left: 5px;
}

.learn-btn {
  background-color: rgb(70, 221, 161);
  border-radius: 0;
  font-size: 11px;
  float: right;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
}

.learn-btn:not(.weui-btn_disabled):active {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(70, 221, 161, 0.6);
}

.weui-btn:after {
  border: none;
  border-radius: 0;
}

</style>
