<template>
  <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="公司编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="地区"
      label="来源"
      width="120">
    </el-table-column>
    <el-table-column
      prop="感官"
      label="感官"
      width="150">
    </el-table-column>
    <el-table-column
      prop="脂肪"
      label="脂肪"
      width="300">
    </el-table-column>
    <el-table-column
      prop="蛋白质"
      label="蛋白质"
      width="120">
    </el-table-column>
    <el-table-column
      prop="水分"
      label="水分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="抗生素"
      label="抗生素"
      width="120">
    </el-table-column>
    <el-table-column
      prop="β-内酰胺酶"
      label="β-内酰胺酶"
      width="120">
    </el-table-column>
    <el-table-column
      prop="酸度"
      label="酸度"
      width="120">
    </el-table-column>
    <el-table-column
      prop="DBP"
      label="DBP"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="deleteinfo(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
  background
  layout="prev, pager, next"
  :page-size="page_size"
  :total="tableData.length"
  @current-change="page">
  </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      deletebrand(row){
        console.log(row.id);
        const _this = this
        axios.delete('' + row.id)
          .then(resp => {
            _this.$alert(row.id+'删除成功','消息',{
              confirmButtonText: '确定',
              callback: action => {
                window.location.reload()
                //动态刷新
              }
            })
        })
        .catch(error => {
          console.error(error);
        })
      },
      edit(row) {
        this.$router.push({
          path: '/InfoUpdate',
          query:{
            row: row
            //跳转到修改页面，利用id查询数据库对应信息显示出来
          }
        })
        //row.id
      },
      page(currentPage){
        var start = this.page_size * (currentPage - 1)
        var end = start + this.page_size
        this.currentTabelData = this.tableData.slice(start, end)
      }
    },

    //用于获取后台返回的数据
    // created(){
    //   const _this = this
    //   axios.get('').then(function (resp){
    //     _this.tableData = resp.data.content
    //     _this.total = resp.data.totalElements
    //   })
    // },

    mounted() {
      const that = this
      axios.get('')
        .then(res => {
          if (200 <= res.status < 300)
          {
            that.tableData = res.data
            // console.log(that.tableData);
            that.changePage(1)
          }
        })
        .catch(error => {
          console.error(error)
        })
    },

    data() {
      return {
        // total: null,
        // tableData: null,
       tableData: [],
        currentTabelData: [],
        page_size: 5
      }
    }
  }
</script>