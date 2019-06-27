<template>
    <div class="MessageBoard">
    <Homeheader></Homeheader>
    <MessageboardNav></MessageboardNav>
    <Messageboard></Messageboard>
    </div>
</template>

<script>
import Homeheader from "@/components/Homeheader";
import MessageboardNav from "@/components/MessageboardNav";
import Messageboard from "@/components/Messageboard";
export default {
      components: { 
      Homeheader,
      MessageboardNav,
      Messageboard
   },
}
</script>


<style>

* {
  margin: 0;
  padding: 0;
}
.MessageBoard {
  width: 100%;
  height: 1080px;
}
</style>

