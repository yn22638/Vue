<template>
    <div class="News">
        <Homeheader></Homeheader>
        <NewsNav></NewsNav>
        <Newslist></Newslist>
        <NewsMenu></NewsMenu>
    </div>
</template>
<script>
import Homeheader from '../components/Homeheader.vue'
import NewsNav from '../components/NewsNav.vue'
import Newslist from '../components/Newslist.vue'
import NewsMenu from '../components/NewsMenu.vue'
export default {
    name:"News",
    components:{
        Homeheader,
        NewsNav,
        Newslist,
        NewsMenu,
    }
    
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.News{
    width: 100%;
    height: 1080px;
}
</style>


