<template>
    <div class="studnet">
        <div class="StudentHeader">
            <ul>
                <li class="Computer">
                    <router-link to="">{{Computer}}</router-link>
                </li>
                <li class="preschool">
                    <router-link to="">{{preschool}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'app',
    data() {
        return{
            Computer:'计算机专业',
            preschool:'学前教育专业',
        }
    }
}
</script>

<style >
    *{
        margin: 0;
        padding: 0;
    }
    .studnet{
        /* clear: both; */
        width: 91%;
        height: 50px;
        /* border: 1px solid red; */
        /* float: left; */
        position: absolute;
        left: 9%;
        top: 5.5%;
    }
    .StudentHeader{
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
    }
    .StudentHeader ul{
        width: 100%;
        height: 100%;
    }
    .StudentHeader ul li{
        width: 48.5%;
        height: 100%;
        float: left;
        list-style: none;
        text-align: center;
        line-height: 50px;
    }
    .StudentHeader ul li a{
        text-decoration: none;
    }
    .Computer{
        border-right: 1px solid #cccccc;
    }
    .Computer a{
        color:#0562e5;
        border-bottom: 3px solid #0562e5;
        padding-bottom: 1.5%;
    }
    .preschool a{
        color: #000;
    }
</style>
