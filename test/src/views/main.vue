<template>
    <el-container>
    
        <el-header>Header</el-header>
    
        <el-container>
    
            <el-aside :width="ss?'60px':'200px'">
             <el-col >
                 <div class="btn" @click="toggle">| | |</div>
    <el-menu
       :collapse="ss"
       mode="vertical"
       default-active="2"
       :collapse-transition="false"
       router
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/password">密码修改</el-menu-item>
          <el-menu-item index="/main/message">信息修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/main/student">
        <i class="el-icon-menu"></i>
        <span slot="title">学生管理</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">老师管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>


            </el-aside>
    
            <el-main><router-view></router-view></el-main>
    
        </el-container>
    
    </el-container>
</template>
<script>
export default {
    data(){
   return {
       ss:false 
   }
    },
    methods: {
       toggle(){
           this.ss=!this.ss
       }
    },
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .btn{
      height: 50px;
      line-height: 50px;
      cursor: pointer;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
      height: 100vh;
  }
</style>