<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="日期" prop="date">
    <el-input v-model="ruleForm.date"></el-input>
  </el-form-item>
  <el-form-item label="奶站" prop="milk_station">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="感官" prop="feel">
    <el-input v-model="ruleForm.protein"></el-input>
  </el-form-item>
  <el-form-item label="脂肪" prop="fat">
    <el-input v-model="ruleForm.feel"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质" prop="protein">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="非脂乳固体" prop="Non_fatty_emulsion_solids">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="冰点" prop="freezing_point">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="PH">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="antibiotics">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β_lactamase">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="酒精实验" prop="alcohol">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="煮沸实验" prop="boiling">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="DBP" prop="DBP">
    <el-input v-model="ruleForm.fat"></el-input>
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
          date: "4.20",
          milk_station:'1',
          feel: "符合",
          fat: 3.26,
          protein: 3.19,
          Non_fatty_emulsion_solids:'1', 
          freezing_point:'1',
          PH:'1',
          antibiotics:'1',
          β_lactamase:'1',
          alcohol:'1',
          boiling:'1',
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(_this.ruleForm)
            //与后端交互 
            // axios.post('',this.ruleForm).then(function(resp){
            //     if(resp.data == 'success'){
            //         _this.$message('添加成功')
            //     }
            // })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>