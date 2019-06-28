<template>
  <div class="StuMore">
    <dituheader></dituheader>
    <stuachievement></stuachievement>
  </div>
</template>

<script>
import stuachievement from "../components/stuachievement";
import dituheader from "../components/dituheader";
export default {
    name:'StuMore',
    data() {
        return{

        }
    },
    components: { stuachievement,dituheader }
};
</script>

<style>
</style>
