<template>
<div>
  <h1 class="word-v-middle">检测指标如下，请输入相关信息</h1>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px" class="demo-ruleForm">
  <el-form-item label="酸度(OT)" prop="酸度">
    <el-input v-model="ruleForm['酸度']"></el-input>
  </el-form-item>
  <el-form-item label="维生素B2(mg/100g)" prop="维生素B2">
    <el-input v-model="ruleForm['维生素B2']"></el-input>
  </el-form-item>
  <el-form-item label="维生素E(mg/100g)" prop="维生素E">
    <el-input v-model="ruleForm['维生素E']"></el-input>
  </el-form-item>
  <el-form-item label="硒(mg/kg)" prop="硒">
    <el-input v-model="ruleForm['硒']"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="doSearch('ruleForm')">检查信息</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          维生素B2:'',
          维生素E:'',
          硒:'',
          酸度:'',
        },
        rules: {
          state: [
            { required: true, message: '请输入组织状态', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      doSearch() {
        if(this.ruleForm.酸度<11 && this.ruleForm.硒<0.13 &&
           this.ruleForm.维生素B2>0.5 && this.ruleForm.维生素E>0.6){
          this.$message.info("该产品为陕西羊奶粉");
        }else{
          this.$message.info("该产品不是陕西羊奶粉");
        }
        //提示信息
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
      
  }
</script>

<style scoped>
  .word-v-middle{
margin-bottom: 0;
font-size: 25px;
min-height: 31px;
display: flex;
align-items: center;
justify-content: center;
height: 31px;
margin-top: 5px;
color: #87878a;
white-space: normal;
}
.word-v-middle span{
text-align: left;
font-size: 10px;
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
</style>