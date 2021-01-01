<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px" class="demo-ruleForm">
  <el-form-item label="来源" prop="from">
    <el-input v-model="ruleForm.from"></el-input>
  </el-form-item>
  <el-form-item label="组织状态" prop="state">
    <el-input v-model="ruleForm.state"></el-input>
  </el-form-item>
  <el-form-item label="色泽" prop="color">
    <el-input v-model="ruleForm.color"></el-input>
  </el-form-item>
  <el-form-item label="水分" prop="water">
    <el-input v-model="ruleForm.water"></el-input>
  </el-form-item>
  <el-form-item label="蛋白质" prop="protein">
    <el-input v-model="ruleForm.protein"></el-input>
  </el-form-item>
  <el-form-item label="脂肪" prop="fat">
    <el-input v-model="ruleForm.fat"></el-input>
  </el-form-item>
  <el-form-item label="乳糖" prop="suger">
    <el-input v-model="ruleForm.suger"></el-input>
  </el-form-item>
  <el-form-item label="蔗糖" prop="sucrose">
    <el-input v-model="ruleForm.sucrose"></el-input>
  </el-form-item>
  <el-form-item label="维生素A" prop="">
    <el-input v-model="ruleForm.weiA"></el-input>
  </el-form-item>
  <el-form-item label="维生素D" prop="">
    <el-input v-model="ruleForm.weiD"></el-input>
  </el-form-item>
  <el-form-item label="维生素E" prop="">
    <el-input v-model="ruleForm.weiE"></el-input>
  </el-form-item>
  <el-form-item label="维生素K1" prop="">
    <el-input v-model="ruleForm.weiK1"></el-input>
  </el-form-item>
  <el-form-item label="维生素B1" prop="">
    <el-input v-model="ruleForm.weiB1"></el-input>
  </el-form-item>
  <el-form-item label="维生素B2" prop="">
    <el-input v-model="ruleForm.weiB2"></el-input>
  </el-form-item>
  <el-form-item label="维生素B6" prop="">
    <el-input v-model="ruleForm.weiB6"></el-input>
  </el-form-item>
  <el-form-item label="维生素B12" prop="">
    <el-input v-model="ruleForm.weiB12"></el-input>
  </el-form-item>
  <el-form-item label="烟酸" prop="">
    <el-input v-model="ruleForm.niacin"></el-input>
  </el-form-item>
  <el-form-item label="叶酸" prop="">
    <el-input v-model="ruleForm.folic"></el-input>
  </el-form-item>
  <el-form-item label="泛酸" prop="">
    <el-input v-model="ruleForm.panto_acid"></el-input>
  </el-form-item>
  <el-form-item label="维生素C" prop="">
    <el-input v-model="ruleForm.weiC"></el-input>
  </el-form-item>
  <el-form-item label="生物素" prop="">
    <el-input v-model="ruleForm.biotin"></el-input>
  </el-form-item>
  <el-form-item label="胆碱" prop="">
    <el-input v-model="ruleForm.choline"></el-input>
  </el-form-item>
  <el-form-item label="铁" prop="">
    <el-input v-model="ruleForm.Fe"></el-input>
  </el-form-item>
  <el-form-item label="钙" prop="">
    <el-input v-model="ruleForm.Ca"></el-input>
  </el-form-item>
  <el-form-item label="锌" prop="">
    <el-input v-model="ruleForm.Zn"></el-input>
  </el-form-item>
  <el-form-item label="磷" prop="">
    <el-input v-model="ruleForm.P"></el-input>
  </el-form-item>
  <el-form-item label="钠" prop="">
    <el-input v-model="ruleForm.Na"></el-input>
  </el-form-item>
  <el-form-item label="钾" prop="">
    <el-input v-model="ruleForm.K"></el-input>
  </el-form-item>
  <el-form-item label="镁" prop="">
    <el-input v-model="ruleForm.Mg"></el-input>
  </el-form-item>
  <el-form-item label="铜" prop="">
    <el-input v-model="ruleForm.Cu"></el-input>
  </el-form-item>
  <el-form-item label="锰" prop="">
    <el-input v-model="ruleForm.Mn"></el-input>
  </el-form-item>
  <el-form-item label="硒" prop="">
    <el-input v-model="ruleForm.Se"></el-input>
  </el-form-item>
  <el-form-item label="碘" prop="">
    <el-input v-model="ruleForm.I"></el-input>
  </el-form-item>
  <el-form-item label="铅" prop="">
    <el-input v-model="ruleForm.Pb"></el-input>
  </el-form-item>
  <el-form-item label="铬" prop="">
    <el-input v-model="ruleForm.Cr"></el-input>
  </el-form-item>
  <el-form-item label="镉" prop="">
    <el-input v-model="ruleForm.Cd"></el-input>
  </el-form-item>
  <el-form-item label="总砷" prop="">
    <el-input v-model="ruleForm.As"></el-input>
  </el-form-item>
  <el-form-item label="亚油酸" prop="">
    <el-input v-model="ruleForm.linoleic_acid"></el-input>
  </el-form-item>
  <el-form-item label="α-亚麻酸" prop="">
    <el-input v-model="ruleForm.α_linoleic_acid"></el-input>
  </el-form-item>
  <el-form-item label="亚油酸:α-亚麻酸" prop="">
    <el-input v-model="ruleForm.α_bizhi"></el-input>
  </el-form-item>
  <el-form-item label="DHA" prop="">
    <el-input v-model="ruleForm.DHA"></el-input>
  </el-form-item>
  <el-form-item label="ARA" prop="">
    <el-input v-model="ruleForm.ARA"></el-input>
  </el-form-item>
  <el-form-item label="月桂酸和肉豆蔻酸占总脂肪酸的比例" prop="">
    <el-input v-model="ruleForm.bili"></el-input>
  </el-form-item>
  <el-form-item label="反式脂肪酸与总脂肪酸的比值" prop="">
    <el-input v-model="ruleForm.bizhi"></el-input>
  </el-form-item>

  <el-form-item label="OPO" prop="">
    <el-input v-model="ruleForm.OPO"></el-input>
  </el-form-item>
  <el-form-item label="氯" prop="">
    <el-input v-model="ruleForm.Cl"></el-input>
  </el-form-item>
  <el-form-item label="酸度" prop="">
    <el-input v-model="ruleForm.PH"></el-input>
  </el-form-item>
  <el-form-item label="碳水化合物" prop="">
    <el-input v-model="ruleForm.carbohydrate"></el-input>
  </el-form-item>
  <el-form-item label="灰分" prop="">
    <el-input v-model="ruleForm.ash_content"></el-input>
  </el-form-item>
  <el-form-item label="Asp" prop="">
    <el-input v-model="ruleForm.Asp"></el-input>
  </el-form-item>
  <el-form-item label="Thr" prop="">
    <el-input v-model="ruleForm.Thr"></el-input>
  </el-form-item>
  <el-form-item label="Ser" prop="">
    <el-input v-model="ruleForm.Ser"></el-input>
  </el-form-item>
  <el-form-item label="Glu" prop="">
    <el-input v-model="ruleForm.Glu"></el-input>
  </el-form-item>
  <el-form-item label="Gly" prop="">
    <el-input v-model="ruleForm.GLy"></el-input>
  </el-form-item>
  <el-form-item label="Ala" prop="">
    <el-input v-model="ruleForm.Ala"></el-input>
  </el-form-item>
  <el-form-item label="Val" prop="">
    <el-input v-model="ruleForm.Val"></el-input>
  </el-form-item>
  <el-form-item label="Met" prop="">
    <el-input v-model="ruleForm.Met"></el-input>
  </el-form-item>
  <el-form-item label="Ile" prop="">
    <el-input v-model="ruleForm.Ile"></el-input>
  </el-form-item>
  <el-form-item label="Leu" prop="">
    <el-input v-model="ruleForm.Leu"></el-input>
  </el-form-item>
  <el-form-item label="Tyr" prop="">
    <el-input v-model="ruleForm.Tyr"></el-input>
  </el-form-item>
  <el-form-item label="Phe" prop="">
    <el-input v-model="ruleForm.Phe"></el-input>
  </el-form-item>
  <el-form-item label="Lys" prop="">
    <el-input v-model="ruleForm.Lys"></el-input>
  </el-form-item>
  <el-form-item label="His" prop="His">
    <el-input v-model="ruleForm.His"></el-input>
  </el-form-item>
  <el-form-item label="Arg" prop="Arg">
    <el-input v-model="ruleForm.Arg"></el-input>
  </el-form-item>
  <el-form-item label="Pro" prop="Pro">
    <el-input v-model="ruleForm.Pro"></el-input>
  </el-form-item>
  <el-form-item label="氨基酸" prop="amino_acid">
    <el-input v-model="ruleForm.amino_acid"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          from:'',
          state: '',
          color: '',
          water: '1',
          protein: '',
          fat: '',
          suger: '',
          source:'',
          weiA:'',
          weiD:'',
          weiE:'11',
          weiK1:'1',
          weiB1:'1',
          weiB2:'1',
          weiB6:'',
          weiB12:'1',
          niacin:'',
          folic:'',
          panto_acid:'11',
          weiC:'',
          biotin:'1',
          choline:'',
          Fe:'',
          Ca:'',
          Zn:'',
          P:'',
          Na:'',
          K:'',
          Mg:'',
          Cu:'',
          Mn:'',
          Se:'',
          I:'',
          Pb:'',
          Cr:'',
          Cd:'',
          As:'',
          linoleic_acid:'',
          α_linoleic_acid:'',
          α_bizhi:'',
          DHA:'',
          ARA:'',
          bili:'',
          bizhi:'',
          OPO:'',
          Cl:'',
          PH:'',
          carbohydrate:'',
          ash_content:'',
          Asp:'',
          Thr:'',
          Ser:'',
          Glu:'',
          Gly:'',
          Ala:'',
          Val:'',
          Met:'',
          Ile:'',
          Leu:'',
          Tyr:'',
          Phe:'',
          Lys:'',
          His:'',
          Arg:'',
          Pro:'',
          amino_acid:''
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(_this.ruleForm)
            //与后端交互 
            // axios.post('',this.ruleForm).then(function(resp){
            //     if(resp.data == 'success'){
            //         _this.$message('添加成功')
            //     }
            // })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>