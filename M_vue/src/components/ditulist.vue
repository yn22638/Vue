<template>
  <div class="ditulist">
    <div class="tab">
      <ul>
        <li>
          <router-link to="/Home">{{School_Information}}</router-link>
          <div class="shu"></div>
        </li>
        <li>
          <router-link to="/ditu" class="a1">{{School_location}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ditulist",
  data() {
    return {
      School_Information: "学校信息",
      School_location: "学校位置"
    };
  }
};
</script>

<style>
.ditulist {
  float: left;
   width: 91.1%;
  height: 4.9%;
}
.ditulist .tab {
  width: 100%;
  height: 100%;
}
.ditulist .tab ul {
  list-style: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #cccccc;
  box-sizing: border-box;
}
.ditulist .tab ul li {
  width: 50%;
  text-align: center;
  line-height: 50px;
  float: left;
  font-size: 15px;
}
.ditulist .tab ul .shu {
  transform: rotate(90deg);
  width: 30px;
  float: right;
  margin-right: -15px;
  border: 1px solid #cccccc;
  position: relative;
  top: 24px;
}
.ditulist .tab ul li a {
  width: 10%;
  height: 50px;
  color: #b8b8b8;
  text-decoration: none;
  display: inline-block;
}
.ditulist .tab ul li .a1 {
  color: #1576f9;
  border-bottom: 2px solid #1576f9;
}
/* .ditulist .tab ul li a:hover {
  color: #1576f9;
  border-bottom: 2px solid #1576f9;
} */
</style>
