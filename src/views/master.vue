<template>
    <div id="background">
      <div id="contain">
        <h1>Register</h1>

        <div class="form">
          <label>用户名：</label><input type="text" v-model.trim="name"><br/>
        </div>
        <div class="form">
          <label>密码：</label><input type="password" v-model.trim="password"><br/>
        </div>
        <div class="form">
          <label>邮箱：</label><input type="email" v-model.trim="mail"><br/>
        </div>
        <div class="form">
          <label>验证码：</label><input type="code" v-model.trim="code"><br/>
        </div>
        <button @click.prevent="handlefinish">提交</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true

//https://www.codenong.com/cs109676298/
export default {
    name:'register',
    props: {
    msg: String
  },
  data(){
    return{
      name:"",
      password:"",
      mail:"",
      code:""
  };
  },methods:{

      getCode() {
      axios
        .get("url", {
          params: {
            email: this.mail
          }
        })
        .then(() => {
          this.$message({
            message: "已发送验证码",
            type: "success"
          });
        })
        .catch(() => {
          this.$message({
            message: "请求超时，请检查网络连接",
            type: "error"
          });
        });
    },
  //点击完成按钮触发handlefinish
    handlefinish:function()
    {
      var _this = this
      axios.post("http://goat.oct-month.top/api/account/registry",{
            username:this.name,
            password:this.password,
            code:this.code,
          })
        .then(res => {
            // console.log(res.data.status)
            if(res.data.status === "success"){
              alert("恭喜你，注册成功")
            //   _this.$message({
            //   message: '恭喜你，注册成功',
            //   type: 'success'
            // })
            _this.$router.replace('/login')
            }
            else {
              _this.$message({
              message: '注册失败',
              type: 'error'
            })
            }
          })
        .catch(function (error) {
            console.log(error)
          })
    },
    tologin () {
      this.$router.replace('/login')
    }
  }
};
</script>


//css
<style scoped>
#background{
  width: 100%;
    height: 100%;
    /* background: url("../assets/bg2.jpg"); */
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}
#contain{
  width: 580px;
  height: 560px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#00000090;
  text-align: center;
  border-radius: 20px;
}
#contain h1{
  color: white;
}
.form{
  color: white;
  margin-left: 20%;
  margin-top: 60px;
  font-size: 20px;
  text-align: left;
}
label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 20px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
}
</style>
