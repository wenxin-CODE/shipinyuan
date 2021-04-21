<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="编号" prop="id">
    <el-input v-model="ruleForm['id']"></el-input>
  </el-form-item>
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
  <el-form-item label="酒精试验" prop="alcohol">
    <el-input v-model="ruleForm['酒精试验']"></el-input>
  </el-form-item>
  <el-form-item label="煮沸试验" prop="boiling">
    <el-input v-model="ruleForm['煮沸试验']"></el-input>
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
import axios from 'axios';
axios.defaults.withCredentials = true

  export default {
    data() {
      return {
        ruleForm: {
          id: 4,
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
          酒精试验:'1',
          煮沸试验:'1',
          DBP:'1'
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
        axios.put('http://goat.oct-month.top/api/CompanySelfInspectionRawGoatMilkSample/', this.ruleForm)
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