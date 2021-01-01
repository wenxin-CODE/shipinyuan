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
      prop="state"
      label="组织状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="color"
      label="色泽"
      width="120">
    </el-table-column>
    <el-table-column
      prop="water"
      label="水分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="protein"
      label="蛋白质"
      width="120">
    </el-table-column>
    <el-table-column
      prop="fat"
      label="脂肪"
      width="120">
    </el-table-column>
    <el-table-column
      prop="suger"
      label="乳糖"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sucrose"
      label="蔗糖"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiA"
      label="维生素A"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiD"
      label="维生素D"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiE"
      label="维生素E"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiK1"
      label="维生素K1"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiB1"
      label="维生素B1"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiB2"
      label="维生素B2"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiB6"
      label="维生素B6"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiB12"
      label="维生素B12"
      width="120">
    </el-table-column>
    <el-table-column
      prop="niacin"
      label="烟酸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="folic"
      label="叶酸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="panto_acid"
      label="泛酸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="weiC"
      label="维生素C"
      width="120">
    </el-table-column>
    <el-table-column
      prop="biotin"
      label="生物素"
      width="120">
    </el-table-column>
    <el-table-column
      prop="choline"
      label="胆碱"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Fe"
      label="铁"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Ca"
      label="钙"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Zn"
      label="锌"
      width="120">
    </el-table-column>
    <el-table-column
      prop="P"
      label="磷"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Na"
      label="钠"
      width="120">
    </el-table-column>
    <el-table-column
      prop="K"
      label="钾"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Mg"
      label="镁"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Cu"
      label="铜"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Mn"
      label="锰"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Se"
      label="硒"
      width="120">
    </el-table-column>
    <el-table-column
      prop="I"
      label="碘"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Pb"
      label="铅"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Cr"
      label="铬"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Cd"
      label="镉"
      width="120">
    </el-table-column>
    <el-table-column
      prop="As"
      label="总砷"
      width="120">
    </el-table-column>
    <el-table-column
      prop="linoleic_acid"
      label="亚油酸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="α_linoleic_acid"
      label="α-亚麻酸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="α_bizhi"
      label="亚油酸:α-亚麻酸"
      width="120">
    </el-table-column>
    <el-table-column
      prop="DHA"
      label="DHA"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ARA"
      label="ARA"
      width="120">
    </el-table-column>
    <el-table-column
      prop="bili"
      label="月桂酸和肉豆蔻酸占总脂肪酸的比例"
      width="120">
    </el-table-column>
    <el-table-column
      prop="bizhi"
      label="反式脂肪酸与总脂肪酸的比值"
      width="120">
    </el-table-column>
    <el-table-column
      prop="OPO"
      label="OPO"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Cl"
      label="氯"
      width="120">
    </el-table-column>
    <el-table-column
      prop="PH"
      label="酸度"
      width="120">
    </el-table-column>
    <el-table-column
      prop="carbohydrate"
      label="碳水化合物"
      width="120">
    </el-table-column>
    <el-table-column
      prop="ash_content"
      label="灰分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Asp"
      label="Asp"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Thr"
      label="Thr"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Ser"
      label="Ser"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Glu"
      label="Glu"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Gly"
      label="Gly"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Ala"
      label="Ala"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Val"
      label="Val"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Met"
      label="Met"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Ile"
      label="Ile"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Leu"
      label="Leu"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Tyr"
      label="Tyr"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Phe"
      label="Phe"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Lys"
      label="Lys"
      width="120">
    </el-table-column>
    <el-table-column
      prop="His"
      label="His"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Arg"
      label="Arg"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Pro"
      label="Pro"
      width="120">
    </el-table-column>
    <el-table-column
      prop="amino_acid"
      label="氨基酸"
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

  <el-pagination
  background
  layout="prev, pager, next"
  :page-size="5"
  :total="50"
  @current-change="page">
  </el-pagination>
  </div>
</template>

<script>
  export default {
    methods: {
      deletebrand(row){
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
          path: '/BrandUpdate',
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

    mounted() {
      const that = this
      axios.get('http://goat.oct-month.top/api/GoatMilkSample')
        .then(res => {
          if (200 <= res.status < 300)
          {
            that.tableData = res.data
            console.log(that.tableData);
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
        tableData: [{
          id: 1,
          from: '陕西省', 
          state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9,
          fat: 28.5,
          suger: 30
        }, {
          id: 2,
         state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9,
          fat: 28.5
        }, {
          id: 3,
         state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9,
          fat: 28.5
        }, {
          id: 4,
          state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9,
          fat: 28.5
        }, {
          id: 5,
          state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9,
          fat: 28.5
        }, {
          id: 6,
          state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9,
          fat: 28.5
        }, {
          id: 7,
          state: '干燥粉末，无结块，无正常视力可见外来异物',
          color: '均匀一致的淡黄色',
          water: 2.17,
          protein: 24.9, 
          fat: 28.5
        }]
      }
    }
  }
</script>