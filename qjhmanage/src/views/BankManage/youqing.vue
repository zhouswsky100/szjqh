<template>
  <div>
    <div class="min2300" >
      <el-table
        :data="tableData"
        border
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="名称"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.cname">{{ scope.row.yname }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="链接地址"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.cmoney">{{ scope.row.ylink}}</span>
          </template>
        </el-table-column>
   
        <el-table-column
          label="操作" align="center">
          <template scope="scope">
             <el-button
              size="small"
              @click="addSeek()">新增友情连链
            </el-button>
            <el-button
              size="small"
              @click="updateSeek(scope.row.ylink,scope.row.yname,scope.row.yid)">修改
            </el-button>
             <el-button
              size="small"
              @click="delectSeek(scope.row.yid)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="添加友链" v-model="dialogVisible" :show-close="true" width="30%">
          <el-form :model="newsForm" ref="newsForm" :rules="rules">
            <el-form-item label="名称" label-width="100px" prop="yname">
              <el-input v-model="newsForm.yname"></el-input>
            </el-form-item>
             <el-form-item label="链接地址" label-width="100px" prop="ylink">
              <el-input v-model="newsForm.ylink"></el-input>
            </el-form-item>
             
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveManager('newsForm')" :loading="hasSubmit">保存</el-button>
        </span>
      </el-dialog>
        <el-dialog title="修改友链" v-model="upDialogVisible" :show-close="true" size="" >
            <el-form :model="UpnewsForm" ref="UpnewsForm" :rules="rules">
            <el-form-item label="名称" label-width="100px" prop="yname">
              <el-input v-model="UpnewsForm.yname"></el-input>
            </el-form-item>
             <el-form-item label="链接地址" label-width="100px" prop="ylink">
              <el-input v-model="UpnewsForm.ylink"></el-input>
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
  import util from '../../utils/util.js'
  import configUrl from '../../data/configUrl'
  import { quillEditor } from "vue-quill-editor" //调用编辑器
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css'
  export default {
    data () {
      return {
        tableData: [],
        loadingData: true,
        newsForm: {
         ylink:"",
         yname:""
          
        },
        UpnewsForm:{
           ylink:"",
           yname:"",
           yid:""
        },
        hasSubmit: false,
        dialogVisible: false,
        upDialogVisible:false,
        rules: {
          ylink: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          yname: [
            { required: true, message: '请输入地址', trigger: 'blur' },
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
          url: configUrl.yq,
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
      updateSeek(ylink,yname,yid){
        var self= this;
         self.UpnewsForm= {
                     ylink:ylink,
                     yname:yname,
                     yid:yid
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
          var data = {
               ylink:self.newsForm.ylink,
               yname:self.newsForm.yname,
                   

            };
          let opt = {
            url: configUrl.yqAdd,
            type: 'post',
            data :data,
            success: function (data) {
                self.$message({
                showClose: true,
                message: "添加成功",
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
       upNews (){
          let self = this;
          var data = {
               yid:self.UpnewsForm.yid,
               ylink:self.UpnewsForm.ylink,
               yname:self.UpnewsForm.yname,
            };
          let opt = {
            url: configUrl.yqUpadate,
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
              url: configUrl.yqdelete+"/"+id+"",
              type: 'get',
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
            util.getMyCompGetRequest(opt);
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
        }
    },
  }
</script>
<style scope>
  .el-form--inline .el-form-item__label {
    float: left;
  }
</style>
