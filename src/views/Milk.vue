<template>
  <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    fixed
    prop="id"
    label="编号"
    width="150">
    </el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="milk_station"
      label="奶站"
      width="300">
    </el-table-column>
    <el-table-column
      prop="feel"
      label="感官"
      width="300">
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
      prop="Non_fatty_emulsion_solids"
      label="非脂乳固体"
      width="300">
    </el-table-column>
    <el-table-column
      prop="freezing_point"
      label="冰点"
      width="300">
    </el-table-column>
    <el-table-column
      prop="PH"
      label="酸度"
      width="300">
    </el-table-column>
    <el-table-column
      prop="antibiotics"
      label="抗生素"
      width="300">
    </el-table-column>
    <el-table-column
      prop="β_lactamase"
      label="β-内酰胺酶"
      width="300">
    </el-table-column>
    <el-table-column
      prop="alcohol"
      label="酒精实验"
      width="300">
    </el-table-column>
    <el-table-column
      prop="boiling"
      label="煮沸实验"
      width="300">
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
        <el-button @click="deletemilk(scope.row)" type="text" size="small">删除</el-button>
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
      deletemilk(row){
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
          path: '/MilkUpdate',
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
          date: "4.20",
          milk_station:'1',
          feel: "符合",
          fat: 3.26,
          protein: 3.19,
          Non_fatty_emulsion_solids:'1', 
          freezing_point:'1',
          PH:'1',
          antibiotics:'1',
          β_lactamase:'1',
          alcohol:'1',
          boiling:'1',
          DBP:'1'
        }, {
          date: "4.20",
          feel: "符合",
          protein: 3.19,
          fat: 3.26
        }, {
          date: "4.20",
          feel: "符合",
          protein: 3.19,
          fat: 3.26
        }, {         
          date: "4.20",
          feel: "符合",
          protein: 3.19,
          fat: 3.26
        }, {
          date: "4.20",
          feel: "符合",
          protein: 3.19,
          fat: 3.26
        }, {
          date: "4.20",
          feel: "符合",
          protein: 3.19,
          fat: 3.26
        }, {
          date: "4.20",
          feel: "符合",
          protein: 3.19,
          fat: 3.26
        }]
      }
    }
  }
</script>