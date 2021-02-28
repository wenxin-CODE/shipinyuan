<template>
  <div class="dashboard-container">
    <div class="btn-wrap">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="请输入搜索关键字" class="input" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table stripe :data="tableData" style="width: 100%">
      <el-table-column width="55">
        <template label="选择" slot-scope="scope">
          <el-checkbox  v-model="scope.row.checked"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="id" width="180">
        <template slot-scope="scope">
          <div>{{ scope.row.id }}</div>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <div v-if="!isEdit">{{ scope.row.uptime }}</div>
          <el-input v-else v-model="scope.row.uptime" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="名称" width="180">
        <template slot-scope="scope">
          <div v-if="!isEdit">{{ scope.row.name }}</div>
          <el-input v-else v-model="scope.row.name" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="地址" show-overflow-tooltip>
        <template slot-scope="scope">
          <div v-if="!isEdit">{{ scope.row.addr }}</div>
          <el-input v-else v-model="scope.row.addr" placeholder="请输入内容" style="width: 180px;"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-button v-if="isEdit" type="primary" @click="updateData" class="confirm">确认修改</el-button>
      <el-pagination :current-page="0" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="76" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // name: "Dashboard",
  // data() {
  //   return
  //     tableData: [],
  //     isEdit: false
  //   };
  // },
  // computed: {},
  // created() {
  //   this.getData();
  // },
  // mounted() {},
  // methods: {
  //   getData() {
  //     axios({
  //       method: "post",
  //       url: "http://139.159.147.237:8080/yxyz/batch/all"
  //     }).then(res => {
  //       res.data.data.forEach(e => {
  //         e.checked = false;
  //       });
  //       this.tableData = res.data.data;
  //     });
  //   },
  // }
 };
</script>

<style lang="scss" scoped>
.dashboard-container {
  .btn-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .btn {
      margin-left: 40px;
    }
  }
  .input-wrap {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
  }
  .input {
    width: 200px;
  }
  .pagination {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
}
.confirm {
  position: absolute;
  left: 20px;
}
</style>