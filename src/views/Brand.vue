<template>
  <div>
    <el-table
      :data="currentTabelData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="公司编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="info"
        label="来源"
        width="120">
      </el-table-column>
      <el-table-column
        prop="品种"
        label="品种"
        width="120">
      </el-table-column>
      <el-table-column
        prop="组织状态"
        label="组织状态"
        width="150">
      </el-table-column>
      <el-table-column
        prop="色泽"
        label="色泽"
        width="120">
      </el-table-column>
      <el-table-column
        prop="水分"
        label="水分(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="蛋白质"
        label="蛋白质(g/100g)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="脂肪"
        label="脂肪(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="乳糖"
        label="乳糖(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="蔗糖"
        label="蔗糖(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="维生素A"
        label="维生素A(µg/100g)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="维生素D"
        label="维生素D(µg/100g)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="维生素E"
        label="维生素E(mg/100g)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="维生素K₁"
        label="维生素K₁(µg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B₁"
        label="维生素B₁(mg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B₂"
        label="维生素B₂(mg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B₆"
        label="维生素B₆(mg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B₁₂"
        label="维生素B₁₂(µg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="烟酸"
        label="烟酸(µg/100g)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="叶酸"
        label="叶酸(µg/100g)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="泛酸"
        label="泛酸(mg/100g)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="维生素C"
        label="维生素C(mg/100g)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="生物素"
        label="生物素(µg/100g)"
        width="140">
      </el-table-column>
      <el-table-column
        prop="胆碱"
        label="胆碱(mg/100g)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="铁"
        label="铁(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="钙"
        label="钙(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="锌"
        label="锌(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="磷"
        label="磷(mg/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="钠"
        label="钠(mg/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="钾"
        label="钾(mg/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="镁"
        label="镁(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="铜"
        label="铜(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="锰"
        label="锰(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="硒"
        label="硒(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="碘"
        label="碘(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="铅"
        label="铅(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="铬"
        label="铬(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="镉"
        label="镉(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="总砷"
        label="总砷(mg/kg)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="亚油酸"
        label="亚油酸(g/100g)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="α-亚麻酸"
        label="α-亚麻酸(g/100g)"
        width="150">
      </el-table-column>
      <el-table-column
        prop="亚油酸:α-亚麻酸"
        label="亚油酸:α-亚麻酸"
        width="130">
      </el-table-column>
      <el-table-column
        prop="DHA"
        label="DHA(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="ARA"
        label="ARA(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="月桂酸和肉豆蔻酸占总脂肪酸的比例"
        label="月桂酸和肉豆蔻酸占总脂肪酸的比例(总脂肪酸%)"
        width="140">
      </el-table-column>
      <el-table-column
        prop="反式脂肪酸与总脂肪酸的比值"
        label="反式脂肪酸与总脂肪酸的比值(总脂肪酸%)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="OPO"
        label="OPO(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="氯"
        label="氯(%)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="酸度"
        label="酸度(°T)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="碳水化合物"
        label="碳水化合物(g/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="灰分"
        label="灰分(g/100g)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="Asp"
        label="天冬氨酸(mg/kg)"
        width="220">
      </el-table-column>
      <el-table-column
        prop="Thr"
        label="苏氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Ser"
        label="丝氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Glu"
        label="谷氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Gly"
        label="甘氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Ala"
        label="丙氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Val"
        label="缬氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Met"
        label="甲硫氨酸(mg/kg)"
        width="140">
      </el-table-column>
      <el-table-column
        prop="Ile"
        label="异亮氨酸(mg/kg)"
        width="140">
      </el-table-column>
      <el-table-column
        prop="Leu"
        label="亮氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Tyr"
        label="酪氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Phe"
        label="苯丙氨酸(mg/kg)"
        width="140">
      </el-table-column>
      <el-table-column
        prop="Lys"
        label="赖氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="His"
        label="组氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Arg"
        label="精氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="Pro"
        label="脯氨酸(mg/kg)"
        width="130">
      </el-table-column>
      <el-table-column
        prop="氨基酸总量"
        label="氨基酸总量(mg/kg)"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deletebrand(scope.row)" type="text" size="small">删除</el-button>
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
  methods: {
    deletebrand(row){
      // console.log(row.id);
      if(this.$store.state.user_role !== 'admin'){
          alert("无更改权限，仅管理员可操作");
        }
      const _this = this
      axios.delete('http://goat.oct-month.top/api/GoatMilkTestingSampleInternational/' + row.id)
        .then(res => {
          if (res.data.status === "success")
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
        path: '/BrandUpdate',
        query:{
          row: row
          //跳转到修改页面，利用id查询数据库对应信息显示出来
        }
      })
      //row.id
    },
    changePage(currentPage) {
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
    axios.get('http://goat.oct-month.top/api/GoatMilkTestingSampleInternational/')
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
