<template>
  <div class="dashboard-container">
    <div class="btn-wrap">
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.Abs260.key" placeholder="Abs260" style="width:400px">
                <el-option label="Abs260" value="Abs260"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.Abs260.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.Abs260.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>
     
        <el-row>
          <el-col span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.Abs280.key" placeholder="Abs280" style="width:400px">
                <el-option label="Abs280" value="Abs280"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.Abs280.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.Abs280.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.Abs260_280.key" placeholder="260/Abs260_280" style="width:400px">
                <el-option label="Abs260/280" value="Abs260_280"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.Abs260_280.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.Abs260_280.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.DNA_content.key" placeholder="DNA_content" style="width:400px">
                <el-option label="DNA浓度" value="DNA_content"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.DNA_content.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.DNA_content.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
            <el-button type="primary" @click="doSearch">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table
        :data="tableData"
        border
        style="width:70%">
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
        prop="Abs260_280"
        label="Abs260/280"
        width="150">
        </el-table-column>
        <el-table-column
        fixed
        prop="DNA_content"
        label="DNA浓度（ng/ul)"
        width="150">
        </el-table-column>
      <!-- <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deletebrand(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true

export default {
  methods: {
    doSearch() {
      this.tableData = []
      this.brandData.forEach((samp) => {
        /* 第一种写法 */
        var flag = true;
        for (var zhibiao in this.searchMetaData) {
          console.log(zhibiao)
          if (!(Math.abs(samp[this.searchMetaData[zhibiao].key] - this.searchMetaData[zhibiao].value) <= this.searchMetaData[zhibiao].jump || this.searchMetaData[zhibiao].value.trim() == ''))
            flag = false;
            console.log(this.searchMetaData[zhibiao].jump)
        }
        if (flag)
          this.tableData.push(samp)
        /* 第二种写法 */
        // if ((samp[this.searchMetaData.营养指标.key] === this.searchMetaData.营养指标.value || this.searchMetaData.营养指标.value.trim() == '')
        //   && (samp[this.searchMetaData.维生素类.key] === this.searchMetaData.维生素类.value || this.searchMetaData.维生素类.value.trim() == '')
        //   && (samp[this.searchMetaData.矿物质类.key] === this.searchMetaData.矿物质类.value || this.searchMetaData.矿物质类.value.trim() == '')
        //   && (samp[this.searchMetaData.氨基酸类.key] === this.searchMetaData.氨基酸类.value || this.searchMetaData.氨基酸类.value.trim() == ''))
        //   this.tableData.push(samp)
      })
    }
  },
  data() {
    return {
      brandData: [],
      tableData: [],
      searchMetaData: {
        Abs260: {
          key: '',
          value: '',
          jump:''
        },
        Abs280: {
          key: '',
          value: '',
          jump:''
        },
        Abs260_280: {
          key: '',
          value: '',
          jump:''
        },
        DNA_content: {
          key: '',
          value: '',
          jump:''
        },
      }
    }
  },
  mounted() {
    var that = this;
    axios.get('http://goat.oct-month.top/api/GoatDNAContent/')
      .then(res => {
        if (res.data.status === "success") {
          that.brandData = res.data.data_list;
          that.tableData = that.brandData
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
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

