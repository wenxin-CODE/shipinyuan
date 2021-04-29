<template>
  <div class="demo-image__lazy">
  <div class="block" v-for="url in urls" :key='url'>
    <el-row :gutter="20">
      <el-col>
        <el-image
        style="width:500px;height:500px"
        :src='url'>
        </el-image>
      </el-col>

      <el-col>
        <el-button @click="deletepicture(url)" type="primary" icon="el-icon-delete">删除</el-button>
      </el-col>
    </el-row>
  </div>
  <!-- <el-col :span="16">
      <el-button type="primary" icon="el-icon-plus" size="small" circle @click="callFile()"></el-button> 
  </el-col> -->
  <el-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="urls"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>
</template>

<script>
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        ]
      }
    },
    methods:{
      deletepicture(row){
         console.log(row);
         if(this.$store.state.user_role !== 'admin'){
          alert("无更改权限，仅管理员可操作");
        }
        const _this = this
        axios.delete('' + row)
          .then(res => {
            if (res.data.status === "success")
              _this.$alert(row+'删除成功','消息',{
                confirmButtonText: '确定',
                callback: action => {
                  window.location.reload()
                  //动态刷新
                }
              })
        })
        .catch(error => {
          console.error(error);
        })
      },
      callFile () {
        //点击添加图片按钮，触发type:"file"的input标签
        let fileDom = document.querySelector("#file")
        fileDom.click()
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    mounted() {
      const that = this
      axios.get('')
        .then(res => {
          if (res.data.status === "success")
          {
            that.urls = res.data.data_list
            // console.log(that.tableData);
          }
        })
        .catch(error => {
          console.error(error)
        })
    },
  }
</script>
