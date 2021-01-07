<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="品种">
    <el-input v-model="ruleForm['info']" readOnly></el-input>
  </el-form-item>
  <el-form-item label="区域">
    <el-input v-model="ruleForm['区域']" readOnly></el-input>
  </el-form-item>
  <el-form-item label="感官" prop="感官">
    <el-input v-model="ruleForm['感官']"></el-input>
  </el-form-item>
  <el-form-item label="脂肪" prop="脂肪">
    <el-input v-model="ruleForm['脂肪']"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质" prop="蛋白质">
    <el-input v-model="ruleForm['蛋白质']"></el-input>
  </el-form-item>
  <el-form-item label="水分" prop="水分">
    <el-input v-model="ruleForm['水分']"></el-input>
  </el-form-item>
  <el-form-item label="抗生素" prop="抗生素">
    <el-input v-model="ruleForm['抗生素']"></el-input>
  </el-form-item>
  <el-form-item label="β-内酰胺酶" prop="β-内酰胺酶">
    <el-input v-model="ruleForm['β-内酰胺酶']"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="酸度">
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
          info: '全脂羊乳粉', 
          区域: '陕西省外',
          感官: '符合',
          脂肪: '28.5',
          蛋白质: '24.9',
          水分: '10',
          抗生素: '10',
          'β-内酰胺酶': '10',
          酸度: '10',
          DBP: '0.3'
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
          axios.post('http://goat.oct-month.top/api/GoatMilkSample2', this.ruleForm)
            .then(res => {
              if(200 <= res.status < 300) {
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
