<template>
    <div>
        <el-table
        :data="currentTabelData"
        border
        style="width:100%">
        <el-table-column
        fixed
        prop="id"
        label="编号"
        width="150">
        </el-table-column>
        <el-table-column
        fixed
        prop="Abs260"
        label="Abs260"
        width="150">
        </el-table-column>
        <el-table-column
        fixed
        prop="Abs280"
        label="Abs280"
        width="150">
        </el-table-column>
        <el-table-column
        fixed
        prop="260_280"
        label="260/280"
        width="150">
        </el-table-column>
        <el-table-column
        fixed
        prop="DNA浓度"
        label="DNA浓度（ng/ul)"
        width="150">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
                <template slot-scope="scope">
                <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="deletemilk(scope.row)" type="text" size="small">删除</el-button>  
                </template>
        </el-table-column>
        </el-table>

        <el-pagination
        background
        layout="prev, pager, next"
        :page-size="page_size"
        :total="tableData.length"
        @current-change="changePage">
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true

export default {
  mounted:{
      deleteDNA(row){
          console.log(row);
          if(this.$store.state.user_role !== 'admin'){
              alert("无更改权限，仅管理员可操作");
          }
          const _this = this
          axios.delete(''+row.id)
          .then(res =>{
              if(res.data.status === "success")
              _this.$alert(row.id+'删除成功','消息',{
                  confirmButtonText:'确定',
                  callback:action=>{
                      window.location.reload()
                  }
              })
          })
          .catch(error => {
              console.error(error);
          })
      },
      edit(row){
          this.$route.push({
              path: '/DNAUpdate',
              query:{
                 row:row 
              }
          })
      },
      changePage(currentPage) {
        var start = this.page_size * (currentPage - 1)
        var end = start + this.page_size
        this.currentTabelData = this.tableData.slice(start, end)
      }
  },

  mounted() {
      const that = this
      axios.get('')
        .then(res => {
          if (res.data.status === "success")
          {
            that.tableData = res.data.data_list
            // console.log(that.tableData);
            that.changePage(1)
          }
        })
        .catch(error => {
          console.error(error)
        })
    },
    
    //返回数据
    data() {
      return {
        tableData: [],
        currentTabelData: [],
        page_size: 9
      }
    }
}
</script>

<style scoped>

</style>