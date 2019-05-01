<template>
  <div id="app">
    <appHeader></appHeader>
    <particulars></particulars>
    <div class="zw">占位</div>
    <p class="iconfont"></p>
    <div class="footer">
      <div class="footer-box">
        <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
        <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/Header'
import particulars from './components/Particulars'
import './assets/fontImg/iconfont.css'
export default {
  name: 'App',
  data(){
    return{
      onof: true
    }
  },
  components: {
    appHeader: header,
    particulars
  }
}
</script>

<style scoped>
.zw{
  height: 850px;
}
.footer{
  width: 100%;
  height: 100px;
  background-color: #333;
  color: #ccc;
  text-align: center;
  line-height: 45px; 
}
.footer .footer-box{
  width: 800px;
  height: 100px;
  margin: 0 auto;
  font-size: 12px;
  letter-spacing: 2px;
}
.footer .footer-box p:nth-of-type(1){
  position: relative;
  top: 20px
}
</style>
