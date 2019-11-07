<template>
  <div>
    <div class="minh600" style="width:1500px">
      <el-table
        :data="tableData"
        border
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="讲师头像"
          width="180"
          align="center">
          <template scope="scope">
            <img style="margin-left: 10px ;    width: 90%;"  :src="scope.row.tphoto |filterimgurl">
          </template>
        </el-table-column>
        <el-table-column
          label="讲师姓名"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.tname }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="讲师类型"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.ttype">{{ scope.row.ttype }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="讲师等级"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.type">{{ scope.row.tleave }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="描述"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.actionIP">{{ scope.row.ncontent }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作" align="center">
          <template scope="scope">
             <el-button
              size="small"
              @click="addSeek()">新增老师
            </el-button>
            <el-button
              size="small"
              @click="updateSeek(scope.row.tleave,scope.row.tname,scope.row.tphoto,scope.row.ttype,scope.row.tid)">修改
            </el-button>
             <el-button
              size="small"
              @click="delectSeek(scope.row.tid)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="添加老师" v-model="dialogVisible" :show-close="true" width="30%">
          <el-form :model="newsForm" ref="newsForm" :rules="rules">
         
            <el-form-item label="头像" label-width="100px" prop="title">
              <el-input  type="file" name="uploadFile" v-model="newsForm.uploadFile"></el-input>
            </el-form-item>
             <el-form-item label="名称" label-width="100px" prop="title">
              <el-input v-model="newsForm.tname" name="tname"></el-input>
            </el-form-item>
             <el-form-item label="类型" label-width="100px" prop="title">
              <el-input v-model="newsForm.ttype" name="ttype"></el-input>
            </el-form-item>
             <el-form-item label="等级" label-width="100px" prop="title">
              <el-input v-model="newsForm.tleave" name="tleave"></el-input>
            </el-form-item>
             <!-- <el-form-item label="描述" label-width="100px" prop="title">
              <el-input v-model="newsForm.nstitle" ></el-input>
            </el-form-item> -->
           
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveManager('newsForm')" :loading="hasSubmit">保存</el-button>
        </span>
      </el-dialog>
        <el-dialog title="修改老师" v-model="upDialogVisible" :show-close="true" size="" >
          <el-form :model="UpnewsForm" ref="UpnewsForm" :rules="rules">
                <el-form-item label="头像" label-width="100px" prop="title">
              <el-input  type="file" name="uploadFile" v-model="UpnewsForm.uploadFile"></el-input>
            </el-form-item>
             <el-form-item label="名称" label-width="100px" prop="title">
              <el-input v-model="UpnewsForm.tname"></el-input>
            </el-form-item>
             <el-form-item label="类型" label-width="100px" prop="title">
              <el-input v-model="UpnewsForm.ttype"></el-input>
            </el-form-item>
             <el-form-item label="等级" label-width="100px" prop="title">
              <el-input v-model="UpnewsForm.tleave"></el-input>
            </el-form-item>
             <el-form-item label="描述" label-width="100px" prop="title">
              <el-input v-model="UpnewsForm.nstitle"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="upManager('UpnewsForm')" :loading="hasSubmit">保存</el-button>
        </span>
        
      </el-dialog>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>
<script>
  import $ from 'jquery'
  import util from '../../utils/util.js'
  import configUrl from '../../data/configUrl'
  export default {
    data () {
      return {
        tableData: [],
        loadingData: true,
        newsForm: {
            uploadFile:"",
            tname: "",
            tphoto:"",
            ttype:"",
        },
        UpnewsForm:{
            tleave: "",
            tname: "",
            tphoto:"",
            ttype:"",
            tid:"",
            uploadFile:""

        },
        hasSubmit: false,
        dialogVisible: false,
        upDialogVisible:false,
        rules: {
          uploadFile: [
            { required: true, message: '头像必须上传', trigger: 'blur' },
          ],
          tleave: [
            { required: true, message: '请输入等级', trigger: 'blur' },
          ],
          ttype: [
            { required: true, message: '请输入讲师类型', trigger: 'blur' },
          ],
          tname: [
            { required: true, message: '请输入小标题', trigger: 'blur' },
          ],
        },
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
          url: configUrl.teacher,
          type: 'get',
          success: function (data) {
            self.tableData=data.datas;
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
      updateSeek(tleave,tname,tphoto,ttype,tid){
        var self= this;
         self.UpnewsForm= {
                  tleave: tleave,
                  tname: tname,
                  tphoto:tphoto,
                  ttype:ttype,
                  tid:tid
                },

        self.upDialogVisible = true;

      },
      saveManager(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.addNews();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
                  url: configUrl.teacherAdd,
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
              "tname":self.UpnewsForm.tname,
              "ttype":self.UpnewsForm.ttype,
              "tleave":self.UpnewsForm.tleave,
              "tid":self.UpnewsForm.tid

            };
          let opt = {
            url: configUrl.teacherUpdate,
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
              url: configUrl.teacherDelete,
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
      changePage (page) {
        this.pageNo = page
        this.initGrid()
      },
      handleEdit (index, username) {
        this.pageNo = 1;
        this.formInline.username = username;
        this.initGrid();
      },
      onSubmit (formName) {
        if (this.hasSubmit) {
          return
        }
        this.pageNo = 1;
        this.initGrid();
      },
      onEditorBlur(){

      }, 
      onEditorFocus(){}
      , 
      onEditorChange(){

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
