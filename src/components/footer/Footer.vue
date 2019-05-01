<template>
    <footer>
        <div class="footer-box">
            <a class="footer-logo">LOGO</a>
            <div class="licence">
                <p>《I don't know what to write licence》《我也不知道写什么许可证》 作者邮箱：tel1517844241@163.com</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* 底部样式 */
footer{
    width: 100%;
    height: 100px;
    background: #2e2e2e url(../../assets/img/footer-bg.png) repeat;
    color: #999;
}
footer .footer-box{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
footer .footer-box .footer-logo{
    width: 150px;
    height: 60px;
    /* background-color: black; */
    font-family: "my-font";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 55px;
    text-align: center;
    font-size: 35px;
    letter-spacing: 7px;
    box-shadow: inset 0 0 100px rgba(0,0,0,0.7);
    cursor: pointer;
    color: #999;
}
footer .footer-box .footer-logo:hover{
    color: white;
}
.licence{
    margin-left: 180px;
    font-family: "my-font";
    font-size: 16px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.licence p{
    position: relative;
    top: 35px;
    height: 30px;
    line-height: 30px;
}
@font-face{
    font-family: "my-font";
    src: url(../../assets/font/jc.eot),url(../../assets/font/jc.otf),url(../../assets/font/jc.svg),url(../../assets/font/jc.ttf),url(../../assets/font/jc.woff);
}
</style>


