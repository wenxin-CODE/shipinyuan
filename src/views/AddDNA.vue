<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="id" prop="id">
    <el-input v-model="ruleForm['id']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="Abs260" prop="Abs260">
    <el-input v-model="ruleForm['Abs260']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="Abs280" prop="Abs280">
    <el-input v-model="ruleForm['Abs280']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="260/280" prop="260/280">
    <el-input v-model="ruleForm['260_280']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="DNA浓度(ng/ul)" prop="DNA浓度">
    <el-input v-model="ruleForm['DNA浓度']" style="width:300px"></el-input>
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
          id: '',
          Abs260: '',
          Abs280: '',
          260_280: '',
          DNA浓度: '',
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
        axios.post('', this.ruleForm)
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