<template>
<div>
  <h1 class="word-v-middle">检测指标如下，请输入相关信息</h1>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="350px">
  <el-form-item label="硒(mg/kg)" prop="硒">
    <el-input v-model="ruleForm['硒']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素B2(mg/100g)" prop="维生素B2">
    <el-input v-model="ruleForm['维生素B2']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素E(mg/100g)" prop="维生素E">
    <el-input v-model="ruleForm['维生素E']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酸度(°T)" prop="酸度">
    <el-input v-model="ruleForm['酸度']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="doSearch('ruleForm')">检查信息</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
  <el-form-item label="检测结果为">
  <el-input v-model="res" style="width:300px" class="te"></el-input>
  </el-form-item>
</el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        res:'',
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
        // if(this.ruleForm.酸度<11 && this.ruleForm.硒<0.13 &&
        //    this.ruleForm.维生素B2>0.5 && this.ruleForm.维生素E>0.6){
        //   this.$message.info("该产品为陕西羊奶粉");
        // }else{
        //   this.$message.info("该产品不是陕西羊奶粉");
        // }
        //提示信息
        var a=0;
        if(this.ruleForm.酸度<11){
            a++;
        }
        if(this.ruleForm.硒<0.13){
            a++;
        }
        if(this.ruleForm.维生素B2>0.5){
            a++;
        }
        if(this.ruleForm.维生素E>0.6){
            a++;
        }
        if(a==2){
          this.res="该产品可能是陕西羊奶粉";
          //this.$message.info("该产品可能是陕西羊奶粉");
        }else if(a==3){
          this.res="该产品极有可能是陕西羊奶粉";
          //this.$message.info("该产品极有可能是陕西羊奶粉");
        }else if(a==4){
          this.res="该产品确定是陕西羊奶粉";
          //this.$message.info("该产品确定是陕西羊奶粉");
        }else{
          this.res="该产品可能是陕西羊奶粉";
          //this.$message.info("该产品不是陕西羊奶粉");
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
      
  }
</script>

<style scoped>

.te>>>input{
color:chocolate;
}

.el-form{
  margin-bottom: 0;
font-size: 25px;
min-height: 31px;
display: block;
align-items: 400px;
justify-content: center;
height: 50px;
margin-top: 0px;
margin-left: 150px;
color: #87878a;
white-space: normal;
}
  .word-v-middle{
margin-bottom: 0;
font-size: 25px;
min-height: 31px;
display: flex;
align-items: 400px;
justify-content: center;
height: 100px;
margin-top: 10px;
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