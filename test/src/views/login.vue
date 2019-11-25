<template>
    <el-container>
     <div class="box">
     <div class="avatar-box">
     <img src="@/assets/logo.png" alt="" class="header-img">
     </div>
      <el-col >
          <el-form label-width="100px" :rules="rules" :model="loginForm" ref="Login">
             <el-form-item label="用户名" prop="username"  >
                <el-input type="text" v-model="loginForm.username" prefix-icon="el-icon-user-solid" /> 
             </el-form-item>
               <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" prefix-icon ="el-icon-lock"></el-input>
             </el-form-item>
             <el-form-item class="btns">
             <el-button type="primary" @click="login">登录</el-button>
              <el-button type="info" @click="reset">重置</el-button>
              </el-form-item>
          </el-form>
      </el-col>
    </div>
    </el-container>
</template>
<script>
export default {

    data(){

    return {
            loginForm:{
                   username:"",
                   password:""
            },
             title:"hello",
             rules:{
                 username:[{required:true,message:'请填入用户名',trigger:'blur'}],
                 password:[{required:true,message:'请输入密码',trigger:'blur'},
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                        
                     ]
             }
             }      
    },
    methods: {
        reset(){
            this.$refs.Login.resetFields()
        },
        login(){
            sessionStorage.setItem('Token',12313)
            this.$router.push('/main')
        }
    },
    mounted() {
        console.dir(this.$router.push)
    },
}
</script>
<style  scoped>
  .el-container{
       width: 100%;
       height: 100vh;
       background: #2b4b6b
  }
  .box{
      width: 450px;
      height: 300px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #fff
  }
  .header-img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #eee;
   
  }
  .avatar-box{ 
      box-shadow: 0  0 10px #ddd;
      border-radius: 50%;
      width:130px;
      height: 130px;
      padding: 10px;
      border:1px solid #eee;
           position: absolute;
     /*  background: #fff;*/
      left: 50%;
      transform: translate(-50%,-50%)
  }
  .el-form{
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
  }
  .btns{
      float: right;
  }
</style>