<template>
  <el-container style="height: 500px; border: 1px solid #eee">
  
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" :default-active="'1-1'">

      <el-menu router >
          <el-submenu v-for="(item,index) in $router.options.routes" :key="index" :index="index+''" v-if="item.show">
            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.path" 
            :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
            <!-- 设置自动高亮 -->
          </el-submenu>
      </el-menu>
 
    </el-menu>
  </el-aside>
  
  <!-- <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
  </el-container> -->  

  <el-main>
    <router-view></router-view>
  </el-main>
  </el-container>
  
</template>

<style scoped>
  
</style>

<script>
  export default {
    name:"Other"
  };
</script>