<template>
  <div class="bgc">
    <homepage></homepage>
    <Catalog></Catalog>
    <div class="Schoollocation">
      <ul class="jump">
        <router-link class="ro" to="/SchoolInformation">
          <li class="xxxx">{{xxxx}}</li>
        </router-link>
        <li class="Delimiter">{{Delimiter}}</li>
        <router-link class="rl" to="/Schoollocation">
        <li class="xxwz">{{xxwz}}</li>
        </router-link>
      </ul>
      <hr class="xhx" >
        <!-- <router-link class="back" to="/SchoolInformation" >  -->
      <img class="back" :src="back" alt="">
        </router-link>
    <img class="map" :src="map" alt="11">
    <div class="ending">
        <span class="words" >学校所在位置：河北省山海关区山海关铁路技师学院</span>
    </div>
    </div>
  </div>
</template>
<script>
import homepage from "@/components/homepage";
import Catalog from "@/components/Catalog"
export default {
  name: "Schoollocation",
  data() {
    return {
      xxxx: "学校信息",
      Delimiter: "|",
      xxwz: "学校位置",
      // back:require("../pic/切图/返回/return.jpg"),
      map:require("../pic/切图/地图/Map.jpg")
    };
  },
  components: { homepage,Catalog }
};
</script>
<style>
*{
        padding: 0;
        margin: 0;
}
.Schoollocation{
    width: 100%;
    height: 100%;
    float: left;
    border: 1px solid white;
}
.Schoollocation .jump {
  float: left;
  width: 100%;
  height: 5%;
  list-style: none;
}
.Schoollocation .jump .xxxx {
  font-family: "楷体";
  margin-top: 0.6%;
  float: left;
  margin-left: 32%;
}
.Schoollocation .jump .ro {
  text-decoration: none;
  color: #999999;
}
.Schoollocation .jump .Delimiter {
  margin-top: 0.6%;
  color: #cccccc;
  float: left;
  /* text-align: center; */
  margin-left: 19.5%;
}
.Schoollocation .jump .xxwz {
  margin-top: 0.6%;
  font-family: "楷体";
  float: left;
  margin-left: 18.6%;
  color: #999999;

}
.Schoollocation .xhx{
  /* float: left; */
  position: absolute;
  width: 100%;
  height: 0.01px;
  background-color: #999999;
  left: 10%;
  top: 10.9%;
}
.Schoollocation .jump .xxwz .rl {
  text-decoration: none;
  color: #999999;
}
.Schoollocation .jump .xxxx:hover {
  border-bottom: 4px solid #3c9cd3;
  color: #0662de;
  /* float: left; */
}
.Schoollocation .jump .xxwz:hover {
  border-bottom: 4px solid #3c9cd3;
  color: #0662de;
}
/* .Schoollocation .back{
    float: left;
    position: absolute;
    top: 12%;
    left: 12%
} */
.Schoollocation .map{
    float: left;
    width: 65%;
    height: 65%;
    position: absolute;
    top:16%;
    left: 21%;
}
.Schoollocation .ending{
    float: left;
    width: 40%;
    height: 5%;
    background-color: #ececec ;
    position: absolute;
    top:85%;
    left: 33%;
}
.Schoollocation .ending .words{
    float: left;
    margin-left: 21%;
    margin-top: 1.5%;
    color: #6d6d6d;
}
</style>
