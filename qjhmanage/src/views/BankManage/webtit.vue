<template>
  <div>
    <div class="minh600" style="width:2400px">
      <el-table
        :data="tableData"
        border
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="网站标题"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" >{{ scope.row.wtitle }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="网站关键字"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.wkeyword }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="网站描述"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.ntitle">{{ scope.row.wdesc }}</span>
          </template>
        </el-table-column>
          <el-table-column
          label="公司邮箱"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.wemail">{{ scope.row.wemail }}</span>
          </template>
        </el-table-column>
         <el-table-column
          label="公司座机"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.wzuoji">{{ scope.row.wzuoji }}</span>
          </template>
        </el-table-column>
           <el-table-column
          label="公司地址"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.waddress">{{ scope.row.waddress }}</span>
          </template>
        </el-table-column>
         <el-table-column
          label="公司传真"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.wchuanzhen">{{ scope.row.wchuanzhen }}</span>
          </template>
        </el-table-column>
         <el-table-column
          label="公司手机"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.wchatphone">{{ scope.row.wchatphone }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作" align="center">
          <template scope="scope">
            <el-button
              size="small"
              @click="updateSeek(scope.row.wid,scope.row.wdesc,scope.row.wkeyword,scope.row.wtitle,scope.row.wemail,scope.row.wzuoji,scope.row.waddress,scope.row.wchuanzhen,scope.row.wchatphone)">修改
            </el-button>
          </template>
        </el-table-column>
      </el-table>
        <el-dialog title="修改网站配置" v-model="upDialogVisible" :show-close="true" size="" >
          <el-form :model="UpnewsForm" ref="UpnewsForm" :rules="rules">
           
            <el-form-item label="网站标题" label-width="100px" prop="wtitle">
              <el-input v-model="UpnewsForm.wtitle"></el-input>
            </el-form-item>
             <el-form-item label="网站关键字" label-width="100px" prop="wkeyword">
              <el-input v-model="UpnewsForm.wkeyword"></el-input>
            </el-form-item>
           <el-form-item label="网站描述" label-width="100px" prop="wdesc">
              <el-input v-model="UpnewsForm.wdesc"></el-input>
            </el-form-item>
              <el-form-item label="公司邮箱" label-width="100px" prop="wemail">
              <el-input v-model="UpnewsForm.wemail"></el-input>
            </el-form-item>
              <el-form-item label="公司座机" label-width="100px" prop="wzuoji">
              <el-input v-model="UpnewsForm.wzuoji"></el-input>
            </el-form-item>
              <el-form-item label="公司地址" label-width="100px" prop="waddress">
              <el-input v-model="UpnewsForm.waddress"></el-input>
            </el-form-item>
            <el-form-item label="公司传真" label-width="100px" prop="wchuanzhen">
              <el-input v-model="UpnewsForm.wchuanzhen"></el-input>
            </el-form-item>
             <el-form-item label="公司手机" label-width="100px" prop="wchatphone">
              <el-input v-model="UpnewsForm.wchatphone"></el-input>
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
        UpnewsForm:{
          wid: "",
          wtitle: "",
          wkeyword: "",
          wdesc: "",
          wemail : "",
          wzuoji: "",
          waddress: "",
          wchuanzhen: "",
          wchatphone: ""
        },
        hasSubmit: false,
        dialogVisible: false,
        upDialogVisible:false,
        rules: {
          wtitle: [
            { required: true, message: '请输入网站标题', trigger: 'blur' },
          ],
          wkeyword: [
            { required: true, message: '请输入关键词', trigger: 'blur' },
          ],
          wdesc: [
            { required: true, message: '请输入描述', trigger: 'blur' },
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
          url: configUrl.webConfig,
          type: 'get',
          success: function (data) {
            self.tableData=[]
            self.tableData.push(data.datas);
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
      updateSeek(wid,wdesc,wkeyword,wtitle,wemail,wzuoji,waddress,wchuanzhen,wchatphone){
        var self= this;
         self.UpnewsForm= {
                  wkeyword:wkeyword,
                  wtitle: wtitle,
                  wdesc:wdesc,
                  wid:wid,
                  wemail : wemail,
                  wzuoji: wzuoji,
                  waddress: waddress,
                  wchuanzhen: wchuanzhen,
                  wchatphone: wchatphone
                },

        self.upDialogVisible = true;

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

       upNews (){
          let self = this;
          var data = {
              wid: self.UpnewsForm.wid,
              wtitle: self.UpnewsForm.wtitle,
              wkeyword: self.UpnewsForm.wkeyword,
              wdesc: self.UpnewsForm.wdesc,
              wemail : self.UpnewsForm.wemail,
              wzuoji: self.UpnewsForm.wzuoji,
              waddress: self.UpnewsForm.waddress,
              wchuanzhen: self.UpnewsForm.wchuanzhen,
              wchatphone: self.UpnewsForm.wchatphone,
            };
          let opt = {
            url: configUrl.webConfigUpdate,
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
              url: configUrl.newsdelete+id+"",
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
