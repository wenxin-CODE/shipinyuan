<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="来源">
    <el-input v-model="ruleForm.from"></el-input>
  </el-form-item>
  <el-form-item label="感官" prop="feel">
    <el-input v-model="ruleForm.feel"></el-input>
  </el-form-item>
  <el-form-item label="脂肪" prop="fat">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质" prop="protein">
    <el-input v-model="ruleForm.protein"></el-input>
  </el-form-item>
  <el-form-item label="水分" prop="water">
    <el-input v-model="ruleForm.water"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="antibiotics">
    <el-input v-model="ruleForm.water"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β_lactamase">
    <el-input v-model="ruleForm.water"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="PH">
    <el-input v-model="ruleForm.water"></el-input>
  </el-form-item>
  <el-form-item label="DBP" prop="DBP">
    <el-input v-model="ruleForm.DBP"></el-input>
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
          from: '陕西省', 
          feel: '符合',
          fat: 28.5,
          protein: 24.9,
          water: 10,
          antibiotics:10,
          β_lactamase:10,
          PH:10,
          DBP: 0.3
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