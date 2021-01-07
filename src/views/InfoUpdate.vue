<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="公司编号">
    <el-input v-model="ruleForm['id']" readOnly></el-input>
  </el-form-item>
  <el-form-item label="来源">
    <el-input v-model="ruleForm['来源']" readOnly></el-input>
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
  <el-form-item label="水分" prop="water">
    <el-input v-model="ruleForm['水分']"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="antibiotics">
    <el-input v-model="ruleForm['抗生素']"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β_lactamase">
    <el-input v-model="ruleForm['β-内酰胺酶']"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="PH">
    <el-input v-model="ruleForm['酸度']"></el-input>
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
  export default {
    data() {
      return {
        ruleForm: {
          id:'1',
          来源: '陕西省', 
          感官: '符合',
          脂肪: 28.5,
          蛋白质: 24.9,
          水分: 10,
          抗生素:10,
          'β-内酰胺酶':10,
          酸度:10,
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
        axios.put('http://goat.oct-month.top/api/GoatMilkSample', this.ruleForm)
          .then(res => {
            if(res.data == 1) {
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
    // created(){
    //     const _this = this
    //     axios.get(''+this.$route.query.id).then(function(resp){
    //         _this.ruleForm = resp.data
    //     })
    //     //后端实现，提供findByid方法
    //     //页面跳转用router，传参数用route
    // }
    mounted() {
        const _this = this
        this.ruleForm = this.$route.query.row
        // axios.get(''+this.$route.query.id).then(function(resp){
        //     _this.ruleForm = resp.data
        // })
        //后端实现，提供findByid方法
        //页面跳转用router，传参数用route
    }
  }
</script>