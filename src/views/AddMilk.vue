<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="日期" prop="date">
    <el-input v-model="ruleForm['日期']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="奶站" prop="milk_station">
    <el-input v-model="ruleForm['奶站']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="感官" prop="feel">
    <el-input v-model="ruleForm['感官']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="脂肪(g/100g)" prop="fat">
    <el-input v-model="ruleForm['脂肪']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质(g/100g)" prop="protein">
    <el-input v-model="ruleForm['蛋白质']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="非脂乳固体(g/100g)" prop="Non_fatty_emulsion_solids">
    <el-input v-model="ruleForm['非脂乳固体']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="冰点(℃)" prop="freezing_point">
    <el-input v-model="ruleForm['冰点']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酸度(°T)" prop="PH">
    <el-input v-model="ruleForm['酸度']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="antibiotics">
    <el-input v-model="ruleForm['抗生素']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β_lactamase">
    <el-input v-model="ruleForm['β-内酰胺酶']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="酒精试验" prop="alcohol">
    <el-input v-model="ruleForm['酒精试验']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="煮沸试验" prop="boiling">
    <el-input v-model="ruleForm['煮沸试验']" style="width:300px"></el-input>
  </el-form-item>
  <el-form-item label="DBP(mg/kg)" prop="DBP">
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
          日期: "",
          奶站:'',
          感官: "",
          脂肪: '',
          蛋白质: '',
          非脂乳固体:'', 
          冰点:'',
          酸度:'',
          抗生素:'',
          'β-内酰胺酶':'',
          酒精试验:'',
          煮沸试验:'',
          DBP:''
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
        axios.post('http://goat.oct-month.top/api/CompanySelfInspectionRawGoatMilkSample/', this.ruleForm)
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