<template>
<div>
  <h1 class="word-v-middle">请输入判断指标数据</h1>
  <h1 class="word-vv-middle">提示：请输入不少于2个指标数据</h1>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="350px">
  <el-form-item label="硒(mg/kg)" prop="硒">
    <el-input v-model="ruleForm['硒']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素B₂(mg/100g)" prop="维生素B₂">
    <el-input v-model="ruleForm['维生素B₂']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="维生素E(mg/100g)" prop="维生素E">
    <el-input v-model="ruleForm['维生素E']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酸度(°T)" prop="酸度">
    <el-input v-model="ruleForm['酸度']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="脂蛋比" prop="脂蛋比">
    <el-input v-model="ruleForm['脂蛋比']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="钙磷比" prop="钙磷比">
    <el-input v-model="ruleForm['钙磷比']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="反式脂肪酸与总脂肪酸的比值" prop="反式脂肪酸与总脂肪酸的比值">
    <el-input v-model="ruleForm['反式脂肪酸与总脂肪酸的比值']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="doSearch('ruleForm')">检查信息</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
  <el-form-item label="检测结果为">
  <el-input v-model="res" style="width:300px" class="te"></el-input>
  </el-form-item>
  <!-- A<SUB>11</SUB>A<SUB>12</SUB>...A<SUB>1n</SUB> -->
</el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        res:'',
        ruleForm: {
          '维生素B₂':'',
          维生素E:'',
          硒:'',
          酸度:'',
          脂蛋比:'',
          钙磷比:'',
          反式脂肪酸与总脂肪酸的比值:'',
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
        //    this.ruleForm.维生素B₂>0.5 && this.ruleForm.维生素E>0.6){
        //   this.$message.info("该产品为陕西羊奶粉");
        // }else{
        //   this.$message.info("该产品不是陕西羊奶粉");
        // }
        //提示信息
        var a=0;
        if(this.ruleForm['酸度']<11 && this.ruleForm['酸度']!=0 ){
            a++;
        }
        if(this.ruleForm['硒']<0.13 && this.ruleForm['硒']!=0){
            a++;
        }
        if(this.ruleForm['维生素B₂']>0.5 && this.ruleForm['维生素B₂']!=0){
            a++;
        }
        if(this.ruleForm['维生素E']>0.6 && this.ruleForm['维生素E']!=0){
            a++;
        }
        if(this.ruleForm['脂蛋比']<1.13 && this.ruleForm['脂蛋比']!=0){            a++;
        }
        if(this.ruleForm['钙磷比']>=11.5 && this.ruleForm['钙磷比']!=0){
            a++;
        }
        if(this.ruleForm['反式脂肪酸与总脂肪酸的比值']>=0.9 && this.ruleForm['反式脂肪酸与总脂肪酸的比值']!=0){
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
          this.res="该产品不是陕西羊奶粉";
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
color:red;
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
margin-left: 50px;
color: #87878a;
white-space: normal;
}
  .word-v-middle{
margin-bottom: 0;
font-size: 25px;
min-height: 31px;
display: flex;
align-items: 400px;
/* justify-content: center; */
height: 70px;
margin-top: 20px;
margin-left: 360px;
color: #111111;;
white-space: normal;
}

.word-vv-middle{
margin-bottom: 0;
font-size: 10px;
min-height: 1px;
display: flex;
align-items: 400px;
/* justify-content: center; */
height: 70px;
margin-top: 0px;
margin-left: 360px;
color: #111111;;
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