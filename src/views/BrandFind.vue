<template>
  <div class="dashboard-container">
    <div class="btn-wrap">
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.营养指标.key" placeholder="营养指标" style="width:400px">
                <el-option label="蛋白质" value="蛋白质"></el-option>
                <el-option label="脂肪" value="脂肪"></el-option>
                <el-option label="非脂乳固体" value="非脂乳固体"></el-option>
                <el-option label="乳糖" value="乳糖"></el-option>
                <el-option label="碳水化合物" value="碳水化合物"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.营养指标.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.营养指标.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
          <el-form-item>
            <el-select v-model="searchMetaData.维生素类.key" placeholder="维生素类" style="width:400px">
              <el-option label="维生素A" value="维生素A"></el-option>
              <el-option label="维生素E" value="维生素E"></el-option>
              <el-option label="维生素K₁" value="维生素K₁"></el-option>
              <el-option label="维生素B₁" value="维生素B₁"></el-option>
              <el-option label="维生素B₂" value="维生素B₂"></el-option>
              <el-option label="维生素B₆" value="维生素B₆"></el-option>
              <el-option label="维生素B₁₂" value="维生素B₁₂"></el-option>
              <el-option label="维生素C" value="维生素C"></el-option>
              <el-option label="烟酸" value="烟酸"></el-option>
              <el-option label="泛酸" value="泛酸"></el-option>
              <el-option label="生物素" value="生物素"></el-option>
              <el-option label="胆碱" value="胆碱"></el-option>
            </el-select>
          </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.维生素类.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.维生素类.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>
     
        <el-row>
          <el-col span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.矿物质类.key" placeholder="矿物质类" style="width:400px">
                <el-option label="钙" value="钙"></el-option>
                <el-option label="铁" value="铁"></el-option>
                <el-option label="锌" value="锌"></el-option>
                <el-option label="磷" value="磷"></el-option>
                <el-option label="钠" value="钠"></el-option>
                <el-option label="钾" value="钾"></el-option>
                <el-option label="镁" value="镁"></el-option>
                <el-option label="铜" value="铜"></el-option>
                <el-option label="硒" value="硒"></el-option>
                <el-option label="碘" value="碘"></el-option>
                <el-option label="氯" value="氯"></el-option>
                <el-option label="总砷" value="总砷"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.矿物质类.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.矿物质类.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.氨基酸类.key" placeholder="氨基酸类" style="width:400px">
                <el-option label="Asp" value="Asp"></el-option>
                <el-option label="Thr" value="Thr"></el-option>
                <el-option label="Ser" value="Ser"></el-option>
                <el-option label="Glu" value="Glu"></el-option>
                <el-option label="Gly" value="Gly"></el-option>
                <el-option label="Ala" value="Ala"></el-option>
                <el-option label="Val" value="Val"></el-option>
                <el-option label="Met" value="Met"></el-option>
                <el-option label="Ile" value="Ile"></el-option>
                <el-option label="Leu" value="Leu"></el-option>
                <el-option label="Tyr" value="Tyr"></el-option>
                <el-option label="Phe" value="Phe"></el-option>
                <el-option label="Lys" value="Lys"></el-option>
                <el-option label="His" value="His"></el-option>
                <el-option label="Arg" value="Arg"></el-option>
                <el-option label="Pro" value="Pro"></el-option>
                <el-option label="氨基酸总量" value="氨基酸总量"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.氨基酸类.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.氨基酸类.jump" placeholder="请输入波动范围" class="input" />
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col span="8">
            <el-form-item>
              <el-select v-model="searchMetaData.其他.key" placeholder="其他" style="width:400px">
                <el-option label="水分" value="水分"></el-option>
                <el-option label="酸度" value="酸度"></el-option>
                <el-option label="灰分" value="灰分"></el-option>
                <el-option label="亚油酸" value="亚油酸"></el-option>
                <el-option label="α-亚麻酸" value="α-亚麻酸"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.其他.value" placeholder="请输入搜索关键字" class="input" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchMetaData.其他.jump" placeholder="请输入波动范围" class="input" />
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
        营养指标: {
          key: '',
          value: '',
          jump:''
        },
        维生素类: {
          key: '',
          value: '',
          jump:''
        },
        矿物质类: {
          key: '',
          value: '',
          jump:''
        },
        氨基酸类: {
          key: '',
          value: '',
          jump:''
        },
        其他: {
          key: '',
          value: '',
          jump:''
        }
      }
    }
  },
  mounted() {
    var that = this;
    axios.get('http://goat.oct-month.top/api/GoatMilkTestingSampleInternational/')
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

