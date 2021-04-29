<template>
  <el-container>
    <el-main>
      <books class="books-area"></books>
    </el-main>
    <el-col :span="16">
          <el-button type="primary" icon="el-icon-plus" size="small" circle @click="plus(i)"></el-button> 
    </el-col>
  </el-container>
  
</template>

<script>
  import Books from './Picture'
  export default {
    name: 'AppLibrary',
    components: {Books},
    mounted:{
      plus (index) {
        this.list.push({})
      },
    }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

