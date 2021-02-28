<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="日期" prop="date">
    <el-input v-model="ruleForm['日期']"></el-input>
  </el-form-item>
  <el-form-item label="奶站" prop="milk_station">
    <el-input v-model="ruleForm['奶站']"></el-input>
  </el-form-item>
  <el-form-item label="感官" prop="feel">
    <el-input v-model="ruleForm['感官']"></el-input>
  </el-form-item>
  <el-form-item label="脂肪" prop="fat">
    <el-input v-model="ruleForm['脂肪']"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质" prop="protein">
    <el-input v-model="ruleForm['蛋白质']"></el-input>
  </el-form-item>
  <el-form-item label="非脂乳固体" prop="Non_fatty_emulsion_solids">
    <el-input v-model="ruleForm['非脂乳固体']"></el-input>
  </el-form-item>
  <el-form-item label="冰点" prop="freezing_point">
    <el-input v-model="ruleForm['冰点']"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="PH">
    <el-input v-model="ruleForm['酸度']"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="antibiotics">
    <el-input v-model="ruleForm['抗生素']"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β_lactamase">
    <el-input v-model="ruleForm['β-内酰胺酶']"></el-input>
  </el-form-item>
  <el-form-item label="酒精实验" prop="alcohol">
    <el-input v-model="ruleForm['酒精实验']"></el-input>
  </el-form-item>
  <el-form-item label="煮沸实验" prop="boiling">
    <el-input v-model="ruleForm['煮沸实验']"></el-input>
  </el-form-item>
  <el-form-item label="DBP" prop="DBP">
    <el-input v-model="ruleForm['DBP']"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          日期: "4.20",
          奶站:'1',
          感官: "符合",
          脂肪: 3.26,
          蛋白质: 3.19,
          非脂乳固体:'1', 
          冰点:'1',
          酸度:'1',
          抗生素:'1',
          'β-内酰胺酶':'1',
          酒精实验:'1',
          煮沸实验:'1',
          DBP:'1'
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
        const _this = this
        //与后端交互 
        axios.post('http://goat.oct-month.top/api/GoatMilkTestingSampleInternational', this.ruleForm)
          .then(res => {
            if(res.data > 0) {
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