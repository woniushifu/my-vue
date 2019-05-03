<template>
  <div id="app">
    <appHeader></appHeader>
    <!-- <particulars></particulars> -->
    
    <router-view></router-view>
    <appFooter></appFooter>   
  </div>
</template>

<script>
// 引入组件
import header from '@/components/header/Header'
import particulars from './components/Particulars'
import footer from './components/footer/Footer'

// 引入样式
import './assets/fontImg/shopcar/iconfont.css'
export default {
  name: 'App',
  data(){
    return{
      onof: true
    }
  },
  components: {
    appHeader: header,
    particulars,
    appFooter: footer
  }
}
</script>

<style scoped>
</style>
