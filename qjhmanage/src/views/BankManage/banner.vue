<template>
  <div>
    <div class="minh600" >
      <el-table
        :data="tableData"
        border
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="banner图"
          width="180"
          align="center">
          <template scope="scope">
             <img style="margin-left: 10px ;width: 90%;"  :src="scope.row.bpath |filterimgurl">
          </template>
        </el-table-column>
        <el-table-column
          label="banner描述"
          width="380"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px">{{scope.row.bname}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作" align="center">
          <template scope="scope">
             <el-button
              size="small"
              @click="addSeek()">新增banner
            </el-button>
             <el-button
              size="small"
              @click="delectSeek(scope.row.bid)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="添加banner" v-model="dialogVisible" :show-close="true" width="30%">
           <el-form :model="newsForm" ref="newsForm" >
            <el-form-item label="banner图片" label-width="100px" prop="uploadFile">
              <el-input  type="file" name="uploadFile" ></el-input>
            </el-form-item>
               <el-form-item label="banner名称" label-width="100px" prop="bname">
              <el-input v-model="newsForm.bname" name="bname"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveManager('newsForm')" :loading="hasSubmit">保存</el-button>
        </span>
      </el-dialog>
    </div>
  
  </div>
</template>
<script>
  import util from '../../utils/util.js'
  import configUrl from '../../data/configUrl'
  import $ from 'jquery'
  export default {
    data () {
      return {
        tableData: [],
        loadingData: true,
        newsForm: {
            uploadFile:"",
            bname: "",
           
        },
        hasSubmit: false,
        dialogVisible: false,
        upDialogVisible:false,
     
        pageNo: 1,
        pageSize: 10,
        total: 100,
        select:"",
        content: ``,
        str: '',
        editorOption: {}
      }
    },
    created () {
      this.initGrid()
    },
    methods: {
      initGrid:function(){
        let self = this;
        let opt = {
          url: configUrl.queryBanner,
          type: 'get',
          success: function (data) {
            self.tableData=data.datas;
            console.log(self.tableData)
            self.loadingData=false;
          },
          fail: function (resp) {
            self.$message({
              showClose: true,
              message: "服务器异常",
              type: 'error'
            });
          }
        };
        util.getMyCompGetRequest(opt);
      },
      addSeek(){
        var self = this;
        self.dialogVisible = true;
      },
      updateSeek(tphoto,jieshao,wqid){
        var self= this;
         self.UpnewsForm= {
                 uploadFile:tphoto,
                 wqjieshao1: jieshao,
                 wqid:wqid
                },

        self.upDialogVisible = true;

      },
      saveManager(formName) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
           this.addNews();
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      upManager(UpnewsForm){
         this.$refs[UpnewsForm].validate((valid) => {
          if (valid) {
           this.upNews();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      addNews (){
           let self = this;
           var $form=$("form")[0];//这里是我们页面中的form表单，记得转成js里的dom对象
	    	   var formData = new FormData($form); //通过这句就能获得FormData对象了
            $.ajax({
                  type: "POST",
                  enctype:'multipart/form-data',
                  url: configUrl.svaeBanner,
                  data: formData,
                  cache:false,
                  processData:false,
                  contentType:false,
                  success: function(result){
                    self.$message({
                      showClose: true,
                      message: "添加成功",
                      type: 'success'
                   });
                  self.initGrid()

                  }
          });
          
      },
       upNews (){
          let self = this;
          var data = {
               "uploadFile":self.UpnewsForm.uploadFile,
               "wqjieshao1":self.UpnewsForm.wqjieshao1,
               "wqid":self.UpnewsForm.wqid
            };
          let opt = {
            url: configUrl.wqxcUpdate,
            type: 'post',
            data :data,
            success: function (data) {
                self.$message({
                showClose: true,
                message: "修改成功",
                type: 'success'
              });
             self.initGrid()
            },
            fail: function (resp) {
              self.$message({
                showClose: true,
                message: "服务器异常",
                type: 'error'
              });
            }
        };
        util.getMyCompPostRequest(opt);
      },
        delectSeek(id){
            let self = this;
            let opt = {
              data:{id:id},
              url: configUrl.deleteBanner,
              type: 'post',
              success: function (data) {
                self.$message({
                showClose: true,
                message: "删除成功",
                type: 'success'
              });
               self.initGrid()
              },
              fail: function (resp) {
                self.$message({
                  showClose: true,
                  message: resp.msg,
                  type: 'error'
                });
              }
            };
            util.getMyCompPostRequest(opt);
      },
   
     
    },
    filters: {
        filterNewsType(value) {
               
         var  obj = ["一周爆闻","新手开店","精选干货","电商资讯"]
           return obj[--value];
        },
        filterNewsTime(value){
          return util.getNowFormatDate(value)
        },
        filterimgurl(value){
          return 'http://112.30.128.52/base/userFiles/'+value
        }
    },
  }
</script>
<style scope>
  .el-form--inline .el-form-item__label {
    float: left;
  }
</style>
