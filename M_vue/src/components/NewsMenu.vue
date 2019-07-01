<template>
  <div class="NewsMenu">
    <div class="banner">
      <img :src="content" alt class="content">
    </div>
    <div class="menu">
      <p class="bianhao">{{bianhao}}</p>
      <p class="name">{{name}}</p>
      <p class="prepor">{{prepor}}</p>
      <p class="riqi">{{riqi}}</p>
      <p class="redu">{{redu}}</p>
    </div>
    <div class="con">
      <ul class="one">
        <li v-for="item in list" class="li1">
          <span class="s1">{{item.bianhao}}</span>
          <span class="s2">{{item.name}}</span>
          <span class="s3">{{item.prepor}}</span>
          <span class="s4">{{item.riqi}}</span>
          <span class="s5">{{item.redu}}</span>
        </li>
      </ul>
    </div>
    <div class="NewsFooter">
      <el-pagination background layout="prev, pager, next" :total="1000" class="qiehuan"></el-pagination>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "NewsMenu",
  data() {
    return {
      content: require("../assets/content.jpg"),
      bianhao: "编号",
      name: "名称",
      prepor: "发布人",
      riqi: "日期",
      redu: "热度",
      list: [
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        },
        {
          bianhao: "098",
          name: "关于学生会黑幕一事，你们怎么看？",
          prepor: "南站非",
          riqi: "2019/6/11",
          redu: "10W"
        }
      ]
    };
  }
};
</script>

<style>
.NewsMenu {
  float: left;
  height: 90.4%;
  width: 91.1%;
}
.banner {
  width: 100%;
  height: 25.5%;
}
.banner .content {
    width: 100%;
    height: 100%;
  margin-top: 0.1%;
}
.menu {
  width: 91.4%;
  height: 4.1%;
  margin: 0 auto;
  background-color: black;
  margin-top: 3%;
}
.menu .bianhao {
  width: 13%;
  height: 55%;
  border-right: 1px solid white;
  float: left;
  margin-top: 0.8%;
  color: white;
  text-align: center;
  font-size: 13px;
  box-sizing: border-box;
}
.menu .name {
  width: 45%;
  height: 55%;
  border-right: 1px solid white;
  float: left;
  margin-top: 0.8%;
  color: white;
  text-align: center;
  font-size: 13px;
  box-sizing: border-box;
}
.menu .prepor {
  width: 15%;
  height: 55%;
  border-right: 1px solid white;
  float: left;
  margin-top: 0.8%;
  color: white;
  text-align: center;
  font-size: 13px;
  box-sizing: border-box;
}
.menu .riqi {
  width: 14%;
  height: 55%;
  border-right: 1px solid white;
  float: left;
  margin-top: 0.8%;
  color: white;
  text-align: center;
  font-size: 13px;
  box-sizing: border-box;
}
.menu .redu {
  width: 12.5%;
  height: 55%;
  float: left;
  margin-top: 0.8%;
  color: white;
  text-align: center;
  font-size: 13px;
}
.con {
  width: 85%;
  height: 52.4%;
  margin: 0 auto;
}
.one {
  width: 100%;
  height: 100%;
}
.li1 {
  height: 7.8%;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid black;
  box-sizing: border-box;
}
span {
  line-height: 40px;
  float: left;
  font-size: 13px;
}
.s1 {
  width: 13%;
  height: 100%;
  margin-left: 1.9%;
}
.s2 {
  width: 42%;
  height: 100%;
  text-align: center;
}
.s3 {
  width: 15%;
  height: 100%;
  text-align: center;
  margin-left: 2.2%;
}
.s4 {
  width: 14%;
  height: 100%;
  text-align: center;
  margin-left: 1%;
}
.s5 {
  width: 5%;
  height: 100%;
  margin-left: 5.9%;
}

.NewsFooter {
  width: 100%;
  height: 4%;
  float: left;
  margin-top: 6%;
}
.NewsFooter .qiehuan{
    float: left;
    margin-left: 36%;
}
</style>
