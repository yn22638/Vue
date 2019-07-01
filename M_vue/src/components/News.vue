<template>
  <div id="app">
    <div class="Newsmenu">
      <ul class="bt">
        <li class="bianhao">{{bianhao}}</li>
        <li class="mingcheng">{{mingcheng}}</li>
        <li class="faburen">{{faburen}}</li>
        <li class="riqi">{{riqi}}</li>
        <li class="redu">{{redu}}</li>
      </ul>
    </div>
    <div class="neirong">
      <ul v-for="arr in list">
        <li class="bianhaotext">{{arr.bianhaotext}}</li>
        <li class="mingchengtext">{{arr.mingchengtext}}</li>
        <li class="faburentext">{{arr.faburentext}}</li>
        <li class="riqitext">{{arr.riqitext}}</li>
        <li class="redutext">{{arr.redutext}}</li>
      </ul>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bianhao: "编号",
      mingcheng: "名称",
      faburen: "发布人",
      riqi: "日期",
      redu: "热度",
      list: [
        {
          bianhaotext: "098",
          mingchengtext: "关于学生会有黑幕一事，你们怎么看？",
          faburentext: "南非",
          riqitext: "2019/06/11",
          redutext: "10w"
        }
      ]
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#app{
    float: left;
  height: 95.4%;
  width: 91.1%;
}
.Newsmenu {
    float: left;
  width: 80%;
  height: 50px;
  background-color: #373737;
}
li {
  list-style: none;
}
.bt {
  width: 100%;
  height: 100%;
}
.bianhao {
  float: left;
  color: white;
  width: 13%;
  height: 100%;
  text-align: center;
  border-right: 1px solid white;
  line-height: 50px;
  font-size: 12px;
}
.mingcheng {
  width: 37%;
  height: 100%;
  text-align: center;
  float: left;
  color: white;
  border-right: 1px solid white;
  line-height: 50px;
  font-size: 12px;
}
.faburen {
  float: left;
  color: white;
  width: 16%;
  height: 100%;
  text-align: center;
  border-right: 1px solid white;
  line-height: 50px;
  font-size: 12px;
}
.riqi {
  float: left;
  color: white;
  width: 16%;
  height: 100%;
  text-align: center;
  border-right: 1px solid white;
  line-height: 50px;
  font-size: 12px;
}
.redu {
  float: left;
  color: white;
  width: 16%;
  height: 100%;
  text-align: center;
  border-left: 1px solid white;
  line-height: 50px;
  font-size: 12px;
}
.neirong {
  width: 80%;
  height: 50px;
  float: left;
  margin-left: 2.5%;
}
.neirong ul {
  width: 100%;
  height: 100%;
}
.bianhaotext {
  float: left;
  width: 13%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}
.mingchengtext {
  float: left;
  width: 35%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 50px;
}
.faburentext {
  float: left;
  width: 16%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}
.riqitext {
  float: left;
  width: 16%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}
.redutext {
  float: left;
  width: 16%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}
.neirong hr {
  float: left;
  width: 93%;
  margin-left: 1%;
}
</style>