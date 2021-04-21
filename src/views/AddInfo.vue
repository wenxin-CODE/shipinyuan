<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="品种" >
    <el-input v-model="ruleForm['info']" readOnly style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="区域">
    <el-input v-model="ruleForm['区域']" readOnly style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="感官" prop="感官">
    <el-input v-model="ruleForm['感官']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="脂肪(g/100g)" prop="脂肪">
    <el-input v-model="ruleForm['脂肪']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质(g/100g)" prop="蛋白质">
    <el-input v-model="ruleForm['蛋白质']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="水分(g/100g)" prop="水分">
    <el-input v-model="ruleForm['水分']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="抗生素">
    <el-input v-model="ruleForm['抗生素']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β-内酰胺酶">
    <el-input v-model="ruleForm['β-内酰胺酶']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酸度(°T)" prop="酸度">
    <el-input v-model="ruleForm['酸度']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="DBP(g/100g)" prop="DBP">
    <el-input v-model="ruleForm['DBP']" style="width:300px"></el-input>
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
          id:'',
          info: '', 
          区域: '',
          感官: '',
          脂肪: '',
          蛋白质: '',
          水分: '',
          抗生素: '',
          'β-内酰胺酶': '',
          酸度: '',
          DBP: ''
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
          axios.post('http://goat.oct-month.top/api/GoatMilkTestingSampleProvince/', this.ruleForm)
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
