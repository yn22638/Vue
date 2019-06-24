<template>
  <div>
    <homepage></homepage>
    <Catalog></Catalog>
    <div class="Teachermanagement">
        <h1>你好</h1>
    </div>
  </div>
</template>
<script>
import homepage from "@/components/homepage";
import Catalog from "@/components/Catalog";
export default {
  data() {
    return {};
  },
  components: { homepage, Catalog }
};
</script>
<style>
*{
    padding: 0;
    margin: 0;

}
.Teachermanagement{
    float: left;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 10%;
}
</style>
