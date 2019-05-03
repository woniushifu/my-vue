<template>
  <header>
    <div class="nav">
      <a to="/" class="logo" exact>
        <img src="../../assets/img/logo.png">
        <div></div>
        <p>我的网站</p>
      </a>
      <div class="header-nav">
        <router-link to="/Home" class="a" tag="div">首页</router-link>
        <router-link to="/My" tag="div">我的</router-link>
        <router-link to="/Store" tag="div">商城</router-link>
        <router-link to="/No" tag="div">不知道</router-link>
      </div>      
      <div class="header-box">
        <div class="login">登录</div>
        <div class="register">注册</div>
      </div>
    </div>
  </header>
</template>
<script>
import '../../assets/css/Header.css'
export default {
  
}
</script>
<style scoped>

</style>

