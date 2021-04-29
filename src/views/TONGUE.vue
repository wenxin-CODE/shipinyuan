<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
      <el-row>
        <!-- <span class="title">{{ fit }}</span> -->
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
      </el-row>
    </div>
    <el-row :span="16">
          <el-button type="primary" icon="el-icon-plus" size="small" circle @click="plus(i)"></el-button> 
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>