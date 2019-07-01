<template>
  <div class="list">
    <ul>
      <li>
        <router-link class="Campusnews" to="/Bbs">{{Campusactivities}}</router-link>
      </li>
      <li class="listright">
        <router-link class="Campusactivities" to="/New">{{Campusnews}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      Campusactivities: "校园活动",
      Campusnews: "校园新闻"
    };
  }
};
</script>

<style scoped>
.list {
  float: left;
  width: 91%;
  height: 4.9%;
  border-bottom: 1px solid #cccccc;
  box-sizing: border-box;
}
.list ul {
  width: 100%;
  height: 100%;
  line-height: 43.46px;
}
.list ul li {
  float: left;
  width: 49.9%;
  height: 80%;
  text-align: center;
  line-height: 41px;
  list-style: none;
  margin-top: 0.5%;
}
.list ul li a {
  float: left;
  text-decoration: none;
  height: 104%;
  line-height: 40px;
  margin-left: 46%;
}
.list .Campusactivities {
  color: #1576f9;
  border-bottom: 2px solid #0662de;
}
.list .listright {
  color: #b8b8b8;
  border-left: 1px solid black;
}
</style>
