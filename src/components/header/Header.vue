<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
      <router-link class="logo" to="/" tag="div">
        <img src="../../assets/img/logo.png" alt="">
        <div class="wire"></div>
        <div>网站</div>
      </router-link>
      <div class="nav">
          <ul>            
              <router-link to="/" class="active" tag='li'>我的</router-link>            
              <router-link to="/" tag='li'>logo设计</router-link>
              <router-link to="/" tag='li'>赛事活动</router-link>
              <router-link to="/" tag='li'>大师社区</router-link>
          </ul>
       </div>
       <div class="right">
        <div class="login">登录</div>
        <div class="register">注册</div>
       </div>
       </el-col>
       </el-row>
    </el-header>
  </el-container>
</template>
<script>
  export default {

  }
</script>
<style scoped>
.el-header{
  background-color: #f0f0f0;
  color: #333;
  border-bottom: 1px solid #c7c7c7;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  position: fixed;
  width: 100%;
  z-index: 1;
}
.el-header .logo{
  position: relative;
  width: 200px;
  height: 100%;
  cursor: pointer;
  left: 100px;
}
.el-header .logo img{
  position: absolute;
  left: 10px;
  top: 10px;
}
.el-header .logo .wire{
  position: absolute;
  width: 1px;
  height: 50px;
  background-color: black;
  left: 80px;
  top: 5px;
}
.el-header .logo div{
  position: relative;
  font-size: 18px;
  right: -90px;
  top: 20px;
  color: #ffcd00;
  font-family: myfont-jc;
}
@font-face {
  font-family: myfont-jc;
  src: url(../../assets/font/jc.ttf);
}
.el-header .nav{
  width: 800px;
  height: 100%;
  color: black;
  position: relative;
  top: -20px;
  margin: 0 auto;
}
.el-header .nav ul li{
  width: 200px;
  height: 60px;
  float: left;
  line-height: 60px;
  text-align: center;
  color: black;
  font-family: myfont-jc;
  font-size: 20px;
}
.el-header .nav ul li:hover{
  background-color: black;
  color: #ffcd00;
}
.el-header .right{
  width: 120px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 100px;
  font-family: myfont-jc;
}
.el-header .right .login{
  width: 50px;
  height: 30px;
  background-color: black;
  color: white;
  position: absolute;
  top: 15px;
  text-align: center;
  line-height: 30px;
}
.el-header .right .register{
  width: 50px;
  height: 30px;
  background-color: white;
  color: black;
  position: absolute;
  top: 15px;
  left: 50px;
  text-align: center;
  line-height: 30px;
}
.active{
  border-bottom: 2px solid #ffcd00;
}
</style>



