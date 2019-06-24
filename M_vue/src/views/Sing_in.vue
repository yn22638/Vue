<template>
  <div class="Sing_in">
    <div class="bgc">
      <img :src="logo" alt class="logo">
    </div>
    <div class="word">
      <div class="you">{{you}}</div>
      <hr class="xian">
      <div class="mai">{{mai}}</div>
      <span class="bufa">{{wenzi}}</span>
      <p class="jingli">{{jingli}}</p>
    </div>
    <div class="sing">
      <form @submit.prevent="login">
        <h5>{{loginin}}</h5>
        <input type="text" placeholder="用户名" class="user" v-model="name">
        <img :src="userimg" alt>
        <input type="password" placeholder="密码" class="pass" v-model="password">
        <img :src="passimg" alt>
        <button class="btn">{{btn}}</button>
        <!-- <button>dkgh</button> -->
        <!-- <input type="submit" value="添加" @click="btn"> -->
      </form>
    </div>
    <div class="copyright">
      <ul>
        <li v-for="item in list" class="footerlist">
          <a href>{{item.footer}}</a>
          <span class="shu">{{shu}}</span>
        </li>
        <li class="footerlist">疑问解答</li>
      </ul>
      <p class="icp">{{ICP}}</p>
      <p class="hao">{{hao}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Sing_in",
  data() {
    return {
      logo: require("../assets/logo.png"),
      you: "你",
      mai: "迈",
      wenzi: "出的步伐不需要很刻意的大步迈",
      jingli: "而是去经历它，思考它，感受它",
      loginin: "登录",
      denglu: "登录",
      shu: "|",
      list: [
        { footer: "收藏本站" },
        { footer: "关于我们" }
      ],
      ICP: "Copyright © 2001-2019 Weaver Network All Rights Reserved.沪ICP备0",
      hao: "沪公网安备 31011202007203号",
      userimg: require("../assets/user.png"),
      passimg: require("../assets/login.png"),
      btn: "添加",
      name:"",
      password:"",
    };
  },
  methods: {
    // btn: function() {
    //   if (this.name != "" && this.password != "") {

    //   } else {
    //     alert("不能为空");
    //   }
    // },
    login() {
      axios
        .post("http://127.0.0.1:7001/login", {
          name: this.name,
          password: this.password
        })
        // console.log(name)
        // console.log(password)
        // console.log(body)
        .then(res => {
          if (res.data == "登录成功") {
            this.$router.push({ name: "Home_page" });
          }
          if (res.data == "用户不存在") {
            alert("用户不存在");
          }
          if (res.data == "密码错误！") {
            alert("密码错误！");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
/* input::-webkit-input-placeholder {
  padding-left: 30px;
} */
.Sing_in {
  width: 100%;
  height: 1080px;
  background-image: url(../assets/Sing_in.jpg);
}
.Sing_in .bgc {
  width: 100%;
  height: 8%;
}
.Sing_in .bgc .logo {
  width: 10%;
  height: 65.5%;
  margin-left: 2%;
  margin-top: 1%;
  margin-bottom: 14px;
}
.Sing_in .word {
  width: 100%;
  height: 8%;
  margin-top: 9.44%;
}
.Sing_in .word .you {
  margin-left: 16.6%;
  color: white;
  font-size: 20px;
}
.Sing_in .word .xian {
  width: 5%;
  background-color: white;
  transform: rotate(120deg);
  margin-left: 16%;
}
.Sing_in .word .mai {
  color: white;
  font-size: 20px;
  margin-left: 18.8%;
  float: left;
}
.Sing_in .word .bufa {
  color: white;
  font-size: 15px;
  margin-left: 1%;
  position: relative;
  top: 10px;
}
.Sing_in .word .jingli {
  font-size: 15px;
  color: white;
  margin-left: 25%;
  margin-top: 1%;
}

.Sing_in .sing {
  width: 26%;
  height: 26%;
  margin-top: 6.2%;
  border: 2px solid #c8c6c6;
  background-color: #fff;
  margin-left: 58.3%;
  box-sizing: border-box;
}
.Sing_in .sing h5 {
  color: #bfbfbf;
  font-size: 16px;
  margin-top: 5.4%;
  margin-left: 8.8%;
}
.Sing_in .sing input {
      width: 74.5%;
    height: 12%;
    box-sizing: border-box;
    border: 1px solid #d7d7d7;
    margin-left: 12.8%;
    margin-top: 5.4%;
    padding: 15px;
    padding-left: 50px;
}
.Sing_in .sing img {
  position: relative;
  left: -73%;
  top: 5px;
}
.Sing_in .sing form .btn {
  padding: 0;
  width: 51.2%;
  height: 37px;
  background-color: #0091ff;
  border: 0;
  color: white;
  margin: 0 auto;
  margin-left: 24%;
  margin-top: 7%;
}

.Sing_in .copyright {
  width: 100%;
  margin-top: 15.2%;
}
.Sing_in .copyright ul {
  margin-left: 45%;
  /* margin-top: 6.9%; */
  margin-top: 4%;
}
.Sing_in .copyright .footerlist {
  float: left;
  list-style: none;
  width: 7%;
  font-size: 13px;
}
.Sing_in .copyright .footerlist a {
  text-decoration: none;
  color: black;
}
.Sing_in .copyright .footerlist .shu {
  margin-left: 1%;
}
.Sing_in .copyright .icp {
  clear: both;
  float: left;
  margin-top: 2%;
  margin-left: 38%;
  font-size: 10px;
}
.Sing_in .copyright .hao {
  clear: both;
  font-size: 10px;
  text-align: center;
}
</style>
