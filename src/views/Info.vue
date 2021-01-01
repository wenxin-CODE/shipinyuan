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
      prop="from"
      label="来源"
      width="120">
    </el-table-column>
    <el-table-column
      prop="feel"
      label="感官"
      width="150">
    </el-table-column>
    <el-table-column
      prop="fat"
      label="脂肪"
      width="300">
    </el-table-column>
    <el-table-column
      prop="protein"
      label="蛋白质"
      width="120">
    </el-table-column>
    <el-table-column
      prop="water"
      label="水分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="antibiotics"
      label="抗生素"
      width="120">
    </el-table-column>
    <el-table-column
      prop="β_lactamase"
      label="β-内酰胺酶"
      width="120">
    </el-table-column>
    <el-table-column
      prop="PH"
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
  page-size="5"
  :total="50"
  @current-change="page">
  </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      deleteinfo(row){
        const _this = this
        axios.delete(''+row.id).then(function(resp){
          _this.$alert(row.id+'删除成功','消息',{
            confirmButtonText: '确定',
            callback: action => {
              window.location.reload()
              //动态刷新
            }
          })
        })
      },
      edit(row) {
        this.$router.push({
          path: '/InfoUpdate',
          query:{
            id: row.id
            //跳转到修改页面，利用id查询数据库对应信息显示出来
          }
        })
        //row.id
      },
      page(currentPage){
        alert(currentPage)
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

    data() {
      return {
        // total: null,
        // tableData: null,
        tableData: [{
          id: 1,
          from: '陕西省', 
          feel: '符合',
          fat: 28.5,
          protein: 24.9,
          water: 10,
          antibiotics:10,
          β_lactamase:10,
          PH:10,
          DBP: 0.3
        }, {
          id: 2,
         feel: '符合',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          DBP: 0.3
        }, {
          id: 3,
         feel: '符合',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          DBP: 0.3
        }, {
          id: 4,
          feel: '符合',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          DBP: 0.3
        }, {
          id: 5,
          feel: '符合',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          DBP: 0.3
        }, {
          id: 6,
          feel: '符合',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          DBP: 0.3
        }, {
          id: 7,
          feel: '符合',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          DBP: 0.3
        }]
      }
    }
  }
</script>