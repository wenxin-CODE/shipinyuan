<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px" class="demo-ruleForm">
  <el-form-item label="公司编号" prop="id">
    <el-input v-model="ruleForm['id']" disabled readOnly></el-input>
  </el-form-item>
  <el-form-item label="来源" prop="info">
    <el-input v-model="ruleForm['info']"></el-input>
  </el-form-item>
  <el-form-item label="品种" prop="品种">
    <el-input v-model="ruleForm['品种']"></el-input>
  </el-form-item>
  <el-form-item label="组织状态" prop="组织状态">
    <el-input v-model="ruleForm['组织状态']"></el-input>
  </el-form-item>
  <el-form-item label="色泽" prop="色泽">
    <el-input v-model="ruleForm['色泽']"></el-input>
  </el-form-item>
  <el-form-item label="水分" prop="水分">
    <el-input v-model="ruleForm['水分']"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质" prop="蛋白质">
    <el-input v-model="ruleForm['蛋白质']"></el-input>
  </el-form-item>
  <el-form-item label="脂肪" prop="脂肪">
    <el-input v-model="ruleForm['脂肪']"></el-input>
  </el-form-item>
  <el-form-item label="乳糖" prop="乳糖">
    <el-input v-model="ruleForm['乳糖']"></el-input>
  </el-form-item>
  <el-form-item label="蔗糖" prop="蔗糖">
    <el-input v-model="ruleForm['蔗糖']"></el-input>
  </el-form-item>
  <el-form-item label="维生素A" prop="维生素A">
    <el-input v-model="ruleForm['维生素A']"></el-input>
  </el-form-item>
  <el-form-item label="维生素D" prop="维生素D">
    <el-input v-model="ruleForm['维生素D']"></el-input>
  </el-form-item>
  <el-form-item label="维生素E" prop="维生素E">
    <el-input v-model="ruleForm['维生素E']"></el-input>
  </el-form-item>
  <el-form-item label="维生素K₁" prop="维生素K₁">
    <el-input v-model="ruleForm['维生素K₁']"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₁" prop="维生素B₁">
    <el-input v-model="ruleForm['维生素B₁']"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₂" prop="维生素B₂">
    <el-input v-model="ruleForm['维生素B₂']"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₆" prop="维生素B₆">
    <el-input v-model="ruleForm['维生素B₆']"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₁₂" prop="维生素B₁₂">
    <el-input v-model="ruleForm['维生素B₁₂']"></el-input>
  </el-form-item>
  <el-form-item label="烟酸" prop="烟酸">
    <el-input v-model="ruleForm['烟酸']"></el-input>
  </el-form-item>
  <el-form-item label="叶酸" prop="叶酸">
    <el-input v-model="ruleForm['叶酸']"></el-input>
  </el-form-item>
  <el-form-item label="泛酸" prop="泛酸">
    <el-input v-model="ruleForm['泛酸']"></el-input>
  </el-form-item>
  <el-form-item label="维生素C" prop="维生素C">
    <el-input v-model="ruleForm['维生素C']"></el-input>
  </el-form-item>
  <el-form-item label="生物素" prop="生物素">
    <el-input v-model="ruleForm['生物素']"></el-input>
  </el-form-item>
  <el-form-item label="胆碱" prop="胆碱">
    <el-input v-model="ruleForm['胆碱']"></el-input>
  </el-form-item>
  <el-form-item label="铁" prop="铁">
    <el-input v-model="ruleForm['铁']"></el-input>
  </el-form-item>
  <el-form-item label="钙" prop="钙">
    <el-input v-model="ruleForm['钙']"></el-input>
  </el-form-item>
  <el-form-item label="锌" prop="锌">
    <el-input v-model="ruleForm['锌']"></el-input>
  </el-form-item>
  <el-form-item label="磷" prop="磷">
    <el-input v-model="ruleForm['磷']"></el-input>
  </el-form-item>
  <el-form-item label="钠" prop="钠">
    <el-input v-model="ruleForm['钠']"></el-input>
  </el-form-item>
  <el-form-item label="钾" prop="钾">
    <el-input v-model="ruleForm['钾']"></el-input>
  </el-form-item>
  <el-form-item label="镁" prop="镁">
    <el-input v-model="ruleForm['镁']"></el-input>
  </el-form-item>
  <el-form-item label="铜" prop="铜">
    <el-input v-model="ruleForm['铜']"></el-input>
  </el-form-item>
  <el-form-item label="锰" prop="锰">
    <el-input v-model="ruleForm['锰']"></el-input>
  </el-form-item>
  <el-form-item label="硒" prop="硒">
    <el-input v-model="ruleForm['硒']"></el-input>
  </el-form-item>
  <el-form-item label="碘" prop="碘">
    <el-input v-model="ruleForm['碘']"></el-input>
  </el-form-item>
  <el-form-item label="铅" prop="铅">
    <el-input v-model="ruleForm['铅']"></el-input>
  </el-form-item>
  <el-form-item label="铬" prop="铬">
    <el-input v-model="ruleForm['铬']"></el-input>
  </el-form-item>
  <el-form-item label="镉" prop="镉">
    <el-input v-model="ruleForm['镉']"></el-input>
  </el-form-item>
  <el-form-item label="总砷" prop="总砷">
    <el-input v-model="ruleForm['总砷']"></el-input>
  </el-form-item>
  <el-form-item label="亚油酸" prop="亚油酸">
    <el-input v-model="ruleForm['亚油酸']"></el-input>
  </el-form-item>
  <el-form-item label="α-亚麻酸" prop="α-亚麻酸">
    <el-input v-model="ruleForm['α-亚麻酸']"></el-input>
  </el-form-item>
  <el-form-item label="亚油酸:α-亚麻酸" prop="亚油酸:α-亚麻酸">
    <el-input v-model="ruleForm['亚油酸:α-亚麻酸']"></el-input>
  </el-form-item>
  <el-form-item label="DHA" prop="DHA">
    <el-input v-model="ruleForm['DHA']"></el-input>
  </el-form-item>
  <el-form-item label="ARA" prop="ARA">
    <el-input v-model="ruleForm['ARA']"></el-input>
  </el-form-item>
  <el-form-item label="月桂酸和肉豆蔻酸占总脂肪酸的比例" prop="月桂酸和肉豆蔻酸占总脂肪酸的比例">
    <el-input v-model="ruleForm['月桂酸和肉豆蔻酸占总脂肪酸的比例']"></el-input>
  </el-form-item>
  <el-form-item label="反式脂肪酸与总脂肪酸的比值" prop="反式脂肪酸与总脂肪酸的比值">
    <el-input v-model="ruleForm['反式脂肪酸与总脂肪酸的比值']"></el-input>
  </el-form-item>
  <el-form-item label="OPO" prop="OPO">
    <el-input v-model="ruleForm['OPO']"></el-input>
  </el-form-item>
  <el-form-item label="氯" prop="氯">
    <el-input v-model="ruleForm['氯']"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="酸度">
    <el-input v-model="ruleForm['酸度']"></el-input>
  </el-form-item>
  <el-form-item label="碳水化合物" prop="碳水化合物">
    <el-input v-model="ruleForm['碳水化合物']"></el-input>
  </el-form-item>
  <el-form-item label="灰分" prop="灰分">
    <el-input v-model="ruleForm['灰分']"></el-input>
  </el-form-item>
  <el-form-item label="Asp" prop="Asp">
    <el-input v-model="ruleForm['Asp']"></el-input>
  </el-form-item>
  <el-form-item label="Thr" prop="Thr">
    <el-input v-model="ruleForm['Thr']"></el-input>
  </el-form-item>
  <el-form-item label="Ser" prop="Ser">
    <el-input v-model="ruleForm['Ser']"></el-input>
  </el-form-item>
  <el-form-item label="Glu" prop="Glu">
    <el-input v-model="ruleForm['Glu']"></el-input>
  </el-form-item>
  <el-form-item label="Gly" prop="Gly">
    <el-input v-model="ruleForm['Gly']"></el-input>
  </el-form-item>
  <el-form-item label="Ala" prop="Ala">
    <el-input v-model="ruleForm['Ala']"></el-input>
  </el-form-item>
  <el-form-item label="Val" prop="Val">
    <el-input v-model="ruleForm['Val']"></el-input>
  </el-form-item>
  <el-form-item label="Met" prop="Met">
    <el-input v-model="ruleForm['Met']"></el-input>
  </el-form-item>
  <el-form-item label="Ile" prop="Ile">
    <el-input v-model="ruleForm['Ile']"></el-input>
  </el-form-item>
  <el-form-item label="Leu" prop="Leu">
    <el-input v-model="ruleForm['Leu']"></el-input>
  </el-form-item>
  <el-form-item label="Tyr" prop="Tyr">
    <el-input v-model="ruleForm['Tyr']"></el-input>
  </el-form-item>
  <el-form-item label="Phe" prop="Phe">
    <el-input v-model="ruleForm['Phe']"></el-input>
  </el-form-item>
  <el-form-item label="Lys" prop="Lys">
    <el-input v-model="ruleForm['Lys']"></el-input>
  </el-form-item>
  <el-form-item label="His" prop="His">
    <el-input v-model="ruleForm['His']"></el-input>
  </el-form-item>
  <el-form-item label="Arg" prop="Arg">
    <el-input v-model="ruleForm['Arg']"></el-input>
  </el-form-item>
  <el-form-item label="Pro" prop="Pro">
    <el-input v-model="ruleForm['Pro']"></el-input>
  </el-form-item>
  <el-form-item label="氨基酸总量" prop="氨基酸总量">
    <el-input v-model="ruleForm['氨基酸总量']"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleForm)">修改</el-button>
    <el-button @click="resetForm(ruleForm)">重置</el-button>
  </el-form-item>

</el-form>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials = true

  export default {
    data() {
      return {
        ruleForm: {
          id:0,
          info: '',
          品种: '',
          组织状态:'',
          色泽:'',
          水分:'',
          蛋白质:'',
          脂肪:'',
          脂肪:'',
          乳糖:'',
          蔗糖:'',
          维生素A:'',
          维生素D:'',
          维生素E:'',
          '维生素K₁':'',
          '维生素B₁':'',
          '维生素B₂':'',
          '维生素B₆':'',
          '维生素B₁₂':'',
          烟酸:'',
          叶酸:'',
          泛酸:'',
          维生素C:'',
          生物素:'',
          胆碱:'',
          铁:'',
          钙:'',
          锌:'',
          磷:'',
          钠:'',
          钾:'',
          镁:'',
          铜:'',
          锰:'',
          硒:'',
          碘:'',
          铅:'',
          铬:'',
          镉:'',
          总砷:'',
          亚油酸:'',
          'α-亚麻酸':'',
          '亚油酸:α-亚麻酸':'',
          DHA:'',
          ARA:'',
          月桂酸和肉豆蔻酸占总脂肪酸的比例:'',
          反式脂肪酸与总脂肪酸的比值:'',
          OPO:'',
          氯:'',
          酸度:'',
          碳水化合物:'',
          灰分:'',
          Asp:'',
          Thr:'',
          Ser:'',
          Glu:'',
          Gly:'',
          Ala:'',
          Val:'',
          Met:'',
          Ile:'',
          Leu:'',
          Tyr:'',
          Phe:'',
          Lys:'',
          His:'',
          Arg:'',
          Pro:'',
          氨基酸总量:'',
        },
        rules: {
          组织状态: [
            { required: true, message: '请输入组织状态', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        if(this.$store.state.user_role !== 'admin'){
          alert("无更改权限，仅管理员可操作");
        }
        const _this = this
        //与后端交互 
        axios.put('http://goat.oct-month.top/api/GoatMilkTestingSampleInternational/', this.ruleForm)
          .then(res => {
            if(res.data.status === "success") {
                _this.$message('修改成功')
            }
        })
        .catch(error => {
          console.error(error)
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
        const _this = this
        this.ruleForm = this.$route.query.row
    }
  }
</script>
