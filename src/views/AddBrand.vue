<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px" class="demo-ruleForm">
  <el-form-item label="地区" prop="info">
    <el-input v-model="ruleForm['info']" style="width:300px" ></el-input>
  </el-form-item>
  <el-form-item label="品种" prop="品种">
    <el-input v-model="ruleForm['品种']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="组织状态" prop="组织状态">
    <el-input v-model="ruleForm['组织状态']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="色泽" prop="色泽">
    <el-input v-model="ruleForm['色泽']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="水分(g/100g)" prop="水分">
    <el-input v-model="ruleForm['水分']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质(g/100g)" prop="蛋白质">
    <el-input v-model="ruleForm['蛋白质']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="脂肪(g/100g)" prop="脂肪">
    <el-input v-model="ruleForm['脂肪']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="乳糖(g/100g)" prop="乳糖">
    <el-input v-model="ruleForm['乳糖']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="蔗糖(g/100g)" prop="蔗糖">
    <el-input v-model="ruleForm['蔗糖']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素A(µg /100g)" prop="维生素A">
    <el-input v-model="ruleForm['维生素A']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素D(µg /100g)" prop="维生素D">
    <el-input v-model="ruleForm['维生素D']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素E(mg/100g)" prop="维生素E">
    <el-input v-model="ruleForm['维生素E']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素K₁(µg /100g)" prop="维生素K₁">
    <el-input v-model="ruleForm['维生素K₁']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₁(mg/100g)" prop="维生素B₁">
    <el-input v-model="ruleForm['维生素B₁']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₂(mg/100g)" prop="维生素B₂">
    <el-input v-model="ruleForm['维生素B₂']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₆(mg/100g)" prop="维生素B₆">
    <el-input v-model="ruleForm['维生素B₆']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₁₂(µg /100g)" prop="维生素B₁₂">
    <el-input v-model="ruleForm['维生素B₁₂']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="烟酸(µg /100g)" prop="烟酸">
    <el-input v-model="ruleForm['烟酸']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="叶酸(µg /100g)" prop="叶酸">
    <el-input v-model="ruleForm['叶酸']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="泛酸(mg/100g)" prop="泛酸">
    <el-input v-model="ruleForm['泛酸']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素C(mg/100g)" prop="维生素C">
    <el-input v-model="ruleForm['维生素C']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="生物素(µg /100g)" prop="生物素">
    <el-input v-model="ruleForm['生物素']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="胆碱(mg/100g)" prop="胆碱">
    <el-input v-model="ruleForm['胆碱']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="铁(mg/kg)" prop="铁">
    <el-input v-model="ruleForm['铁']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="钙(mg/kg)" prop="钙">
    <el-input v-model="ruleForm['钙']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="锌(mg/kg)" prop="锌">
    <el-input v-model="ruleForm['锌']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="磷(mg/100g)" prop="磷">
    <el-input v-model="ruleForm['磷']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="钠(mg/100g)" prop="钠">
    <el-input v-model="ruleForm['钠']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="钾(mg/100g)" prop="钾">
    <el-input v-model="ruleForm['钾']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="镁(mg/kg)" prop="镁">
    <el-input v-model="ruleForm['镁']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="铜(mg/kg)" prop="铜">
    <el-input v-model="ruleForm['铜']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="锰(mg/kg)" prop="锰">
    <el-input v-model="ruleForm['锰']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="硒(mg/kg)" prop="硒">
    <el-input v-model="ruleForm['硒']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="碘(mg/kg)" prop="碘">
    <el-input v-model="ruleForm['碘']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="铅(mg/kg)" prop="铅">
    <el-input v-model="ruleForm['铅']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="铬(mg/kg)" prop="铬">
    <el-input v-model="ruleForm['铬']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="镉(mg/kg)" prop="镉">
    <el-input v-model="ruleForm['镉']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="总砷(mg/kg)" prop="总砷">
    <el-input v-model="ruleForm['总砷']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="亚油酸(g/100g)" prop="亚油酸">
    <el-input v-model="ruleForm['亚油酸']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="α-亚麻酸(g/100g)" prop="α-亚麻酸">
    <el-input v-model="ruleForm['α-亚麻酸']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="亚油酸:α-亚麻酸" prop="亚油酸:α-亚麻酸">
    <el-input v-model="ruleForm['亚油酸:α-亚麻酸']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="DHA(g/100g)" prop="DHA">
    <el-input v-model="ruleForm['DHA']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="ARA(g/100g)" prop="ARA">
    <el-input v-model="ruleForm['ARA']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="月桂酸和肉豆蔻酸占总脂肪酸的比例(总脂肪酸%)" prop="月桂酸和肉豆蔻酸占总脂肪酸的比例">
    <el-input v-model="ruleForm['月桂酸和肉豆蔻酸占总脂肪酸的比例']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="反式脂肪酸与总脂肪酸的比值(总脂肪酸%)" prop="反式脂肪酸与总脂肪酸的比值">
    <el-input v-model="ruleForm['反式脂肪酸与总脂肪酸的比值']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="OPO(g/100g)" prop="OPO">
    <el-input v-model="ruleForm['OPO']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="氯(%)" prop="氯">
    <el-input v-model="ruleForm['氯']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酸度(°T)" prop="酸度">
    <el-input v-model="ruleForm['酸度']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="碳水化合物(g/100g)" prop="碳水化合物">
    <el-input v-model="ruleForm['碳水化合物']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="灰分(g/100g)" prop="灰分">
    <el-input v-model="ruleForm['灰分']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="天冬氨酸(mg/kg)" prop="Asp">
    <el-input v-model="ruleForm['Asp']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="苏氨酸(mg/kg)" prop="Thr">
    <el-input v-model="ruleForm['Thr']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="丝氨酸(mg/kg)" prop="Ser">
    <el-input v-model="ruleForm['Ser']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="谷氨酸(mg/kg)" prop="Glu">
    <el-input v-model="ruleForm['Glu']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="甘氨酸(mg/kg)" prop="Gly">
    <el-input v-model="ruleForm['Gly']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="丙氨酸(mg/kg)" prop="Ala">
    <el-input v-model="ruleForm['Ala']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="缬氨酸(mg/kg)" prop="Val">
    <el-input v-model="ruleForm['Val']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="甲硫氨酸(mg/kg)" prop="Met">
    <el-input v-model="ruleForm['Met']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="异亮氨酸(mg/kg)" prop="Ile">
    <el-input v-model="ruleForm['Ile']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="亮氨酸(mg/kg)" prop="Leu">
    <el-input v-model="ruleForm['Leu']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酪氨酸(mg/kg)" prop="Tyr">
    <el-input v-model="ruleForm['Tyr']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="苯丙氨酸(mg/kg)" prop="Phe">
    <el-input v-model="ruleForm['Phe']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="赖氨酸(mg/kg)" prop="Lys">
    <el-input v-model="ruleForm['Lys']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="组氨酸(mg/kg)" prop="His">
    <el-input v-model="ruleForm['His']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="精氨酸(mg/kg)" prop="Arg">
    <el-input v-model="ruleForm['Arg']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="脯氨酸(mg/kg)" prop="Pro">
    <el-input v-model="ruleForm['Pro']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="氨基酸总量(mg/kg)" prop="氨基酸总量">
    <el-input v-model="ruleForm['氨基酸总量']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
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
          state: [
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
        axios.post('http://goat.oct-month.top/api/GoatMilkTestingSampleInternational/', this.ruleForm)
          .then(res => {
            if(res.data.status === "success") {
                _this.$message('添加成功')
            }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
