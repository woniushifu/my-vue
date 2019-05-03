<template>
    <div>
        <div class="bg"></div>
        <div class="slideshow">
            <ul>
                <li>
                    <img src="../assets/img/1.jpg">
                </li>
                <li>
                    <img src="../assets/img/2.jpg">
                </li>
                <li>
                    <img src="../assets/img/3.jpg">
                </li>
                <li>
                    <img src="../assets/img/4.jpg">
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bg{
    width: 100%;
	height: 100%;
    background: url(../assets/img/1.jpg) no-repeat;
    background: red;
	background-size: cover; 
	filter: blur(7px);
	/*position: relative;*/
}
.slideshow{
    width: 1200px;
    height: 450px;
    margin: 20px auto;
    background:white;
    padding:  10px 50px;
    border: 1px solid white;
	background-clip: content-box;
    box-shadow:0px 0px 10px #000;
}
.slideshow ul{
    width: 720px;
    height: 405px;
    position: relative;
}
.slideshow ul li img{
    position: absolute;
    width: 720px;
    top:23px;
    left: 240px;
}

</style>

