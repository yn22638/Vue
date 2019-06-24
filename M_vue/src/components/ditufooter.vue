<template>
    <div class="ditufooter">
        <div class="weizhi">
            <p>{{weizhi}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"ditufooter",
    data(){
        return{
            weizhi:"所在位置：河北省山海关区山海关铁路技师学院",
        }
    }
}
</script>

<style>
.ditufooter{
    float: left;
    width: 91.1%;
    height: 13.5%;
}
.ditufooter .weizhi{
    float: left;
    width: 57.2%;
    height: 37%;
    background-color: #ececec;
    margin-left: 22%;
    margin-top: 3.3%;
}
.ditufooter .weizhi p{
    font-size: 19px;
    line-height: 55px;
    text-align: center;
    letter-spacing: 1px;
}
</style>
