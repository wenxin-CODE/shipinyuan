<template>
  <div class="all">
     <div class="top">
       <el-row :gutter="20">
  <el-col :span="3"></el-col>
  <el-col :span="16" :offset="5">
 <el-input v-model="keywords" autocomplete="off" size="small" style="width: 350px;margin-right: 10px" placeholder="请输入关键字"></el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchBooksByKeyWord()">搜索</el-button></el-col>
</el-row>
    </div>
    <div class="mid">
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
        label="维生素A(µg /100g)"
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
        prop="维生素K1"
        label="维生素K1(µg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B1"
        label="维生素B1(mg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B2"
        label="维生素B2(mg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B6"
        label="维生素B6(mg/100g)"
        width="170">
      </el-table-column>
      <el-table-column
        prop="维生素B12"
        label="维生素B12(µg/100g)"
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
        label="酸度(OT)"
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
    </div>
    <div class="footer">
      <el-pagination
        @current-change="changePage"
        :current-page="searchForm.pageIndex"
        :page-size="page_size"
        layout="total, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
//import { getQualitySafetyItems } from "@/services/index";
export default {
  data(){
    return{
      // tableData: [],
      // currentTabelData: [],
      searchForm:{
        id: 1, //默认页码是第一页
        info: 15, //默认显示的条数
        品种: "东风日产" //关键字
      },
       totalCount: 0,
    };
  },

  methods:{
    searchBooksByKeyWord() {
      var _this = this
      this.$axios
        .post('/search', {
          keywords: this.keywords
        }).then(resp => {
          if (resp && resp.status === 200) {
            _this.tableData = resp.data
          }
        })
    },
    
    changePage(currentPage) {
      var start = this.page_size * (currentPage - 1)
      var end = start + this.page_size
      this.currentTabelData = this.tableData.slice(start, end)
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
    .el-button {
      font-size: 15px;
      margin: 30px 40px 20px 30px;
    }
.jk-table{
  color:#ccc
}
.footer {
    margin-top: 20px;
    text-align: right;
}
}
</style>