<template>
  <div>
    <el-table>
    <img :src="studentImg"  style="width:100px; height:130px">
    <img :src="bookImg" style="width:100px;height:130px">
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'borrow',
  data () {
    return {
    // 图片路径
      bookImg: require('@/assets/logo.png'),
      studentImg: require('@/assets/logo.png'),
    }
  }
}
</script>