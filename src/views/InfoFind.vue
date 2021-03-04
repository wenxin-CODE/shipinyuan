<template>
  <div class="dashboard-container">
    <div class="btn-wrap">
      <el-select v-model="value" placeholder="营养指标" style="width:300px">
        <el-option label="蛋白质" value="蛋白质"></el-option>
        <el-option label="脂肪" value="脂肪"></el-option>
        <el-option label="非脂乳固体" value="非脂乳固体"></el-option>
        <el-option label="乳糖" value="乳糖"></el-option>
        <el-option label="碳水化合物" value="碳水化合物"></el-option>
      </el-select>

      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="请输入搜索关键字" class="input" />
        </el-form-item>
        
      </el-form>



      
      <el-select v-model="value" placeholder="维生素类" style="width:300px">
        <el-option label="维生素A" value="维生素A"></el-option>
        <el-option label="维生素E" value="维生素E"></el-option>
        <el-option label="维生素K1" value="维生素K1"></el-option>
        <el-option label="维生素B1" value="维生素B1"></el-option>
        <el-option label="维生素B2" value="维生素B2"></el-option>
        <el-option label="维生素B6" value="维生素B6"></el-option>
        <el-option label="维生素C" value="维生素C"></el-option>
        <el-option label="烟酸" value="烟酸"></el-option>
        <el-option label="泛酸" value="泛酸"></el-option>
        <el-option label="生物素" value="生物素"></el-option>
        <el-option label="胆碱" value="胆碱"></el-option>
      </el-select>

      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="请输入搜索关键字" class="input" />
        </el-form-item>
        
      </el-form>
      <el-select v-model="value" placeholder="矿物质类">
        <el-option label="钙" value="AA"></el-option>
        <el-option label="铁" value="bb"></el-option>
        <el-option label="锌" value="cc"></el-option>
        <el-option label="磷" value="cc"></el-option>
        <el-option label="钠" value="cc"></el-option>
        <el-option label="钾" value="cc"></el-option>
        <el-option label="镁" value="cc"></el-option>
        <el-option label="铜" value="cc"></el-option>
        <el-option label="硒" value="cc"></el-option>
        <el-option label="碘" value="cc"></el-option>
        <el-option label="氯" value="cc"></el-option>
        <el-option label="总砷" value="cc"></el-option>
      </el-select>

      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="请输入搜索关键字" class="input" />
        </el-form-item>
      </el-form>

      <el-select v-model="value" placeholder="请选择">
        <el-option label="AA" value="AA"></el-option>
        <el-option label="bb" value="bb"></el-option>
        <el-option label="cc" value="cc"></el-option>
      </el-select>

      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="请输入搜索关键字" class="input" />
        </el-form-item>
        
      </el-form>


      <el-form :inline="true" class="demo-form-inline">
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
