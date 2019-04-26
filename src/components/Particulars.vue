<template>
    <div>
        <div class="particulars-box">           
            <div class="commodity-picture">
                <div class="commodity-style">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div class="commodity-particulars">
                <div class="particulars-header"></div>
                <div class="particulars-body"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.particulars-box{
    width: 1000px;
    height: 600px;
    background-color: black;
    margin: 100px auto 0;
    position: relative;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
    border: 1px solid #c7c7c7;
}
.commodity-picture{
    width: 400px;
    height: 600px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: aqua;
}
.commodity-style{
    width: 400px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: red;
}
.commodity-style ul{
    width: 400px;
    margin: 0 auto;
}

.commodity-style ul li{
    width: 55px;
    height: 80px;
    border: 1px solid #c7c7c7;
    background-color: seagreen;
    float: left;
    border-radius: 7px;
}
.commodity-particulars{
    width: 600px;
    height: 600px;
    background-color: chocolate;
    position: absolute;
    right: 0;
    top: 0;
}
.particulars-header{
    width: 600px;
    height: 150px;
    background-color: chartreuse;
    position: absolute;
    top: 0;
    right: 0;
}
.particulars-body{
    width: 600px;
    height: 450px;
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>
