<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="编号" prop="id">
    <el-input v-model="ruleForm['id']"></el-input>
  </el-form-item>
  <el-form-item label="Abs260" prop="Abs260">
    <el-input v-model="ruleForm['Abs260']"></el-input>
  </el-form-item>
  <el-form-item label="Abs280" prop="Abs280">
    <el-input v-model="ruleForm['Abs280']"></el-input>
  </el-form-item>
  <el-form-item label="260/280" prop="Abs260_280">
    <el-input v-model="ruleForm['Abs260_280']"></el-input>
  </el-form-item>
  <el-form-item label="DNA浓度（ng/ul）" prop="DNA_content">
    <el-input v-model="ruleForm['DNA_content']"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
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
          Abs260_280: '',
          DNA_content: '',
        },
        rules: {
          feel: [
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
        axios.put('http://goat.oct-month.top/api/GoatDNAContent/', this.ruleForm)
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
        // axios.get(''+this.$route.query.id).then(function(resp){
        //     _this.ruleForm = resp.data
        // })
        //后端实现，提供findByid方法
        //页面跳转用router，传参数用route
    }
    // created(){
    //     const _this = this
    //     axios.get(''+this.$route.query.id).then(function(resp){
    //         _this.ruleForm = resp.data
    //     })
    //     //后端实现，提供findByid方法
    //     //页面跳转用router，传参数用route
    // }
  }
</script>