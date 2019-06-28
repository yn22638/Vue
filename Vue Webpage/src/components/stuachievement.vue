<template>
    <div class="stuachievement">
        <div class="SchoolReport">
            <span>{{report}}</span>
        </div>
        <div class="stuinformation">

        </div>
        <div class="mark">

        </div>
    </div>
</template>

<script>
export default {
    name:'stuachievement',
    data() {
        return{
            report:'成绩单',
        }
    },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    margin: auto;
}
.stuachievement{
    float: left;
    width: 41.5%;
    height: 100%;
    border: 1px solid red;
}
</style>
