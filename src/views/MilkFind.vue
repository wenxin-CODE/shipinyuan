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
      prop="日期"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="奶站"
      label="奶站"
      width="120">
    </el-table-column>
    <el-table-column
      prop="感官"
      label="感官"
      width="120">
    </el-table-column>
    <el-table-column
      prop="脂肪"
      label="脂肪(g/100g)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="蛋白质"
      label="蛋白质(g/100g)"
      width="130">
    </el-table-column>
    <el-table-column
      prop="非脂乳固体"
      label="非脂乳固体(g/100g)"
      width="160">
    </el-table-column>
    <el-table-column
      prop="冰点"
      label="冰点(℃)"
      width="120">
    </el-table-column>
    <el-table-column
      prop="酸度"
      label="酸度"
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
      prop="酒精实验"
      label="酒精实验"
      width="120">
    </el-table-column>
    <el-table-column
      prop="煮沸实验"
      label="煮沸实验"
      width="120">
    </el-table-column>
    <el-table-column
      prop="DBP"
      label="DBP(mg/kg)"
      width="120">
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
            _this.books = resp.data
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