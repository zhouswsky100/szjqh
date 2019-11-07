<template>
  <div>
    <div class="minh600">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="新闻类型"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" >{{ scope.row.ntype | filterNewsType}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="发布时间"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ndate | filterNewsTime }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="标题"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.ntitle">{{ scope.row.ntitle }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="小标题"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.type">{{ scope.row.nstitle }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="内容"
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
              @click="addSeek()">新增新闻
            </el-button>
            <el-button
              size="small"
              @click="updateSeek(scope.row.ndate,scope.row.nstitle,scope.row.ncontent,scope.row.ntype,scope.row.nid,scope.row.ntitle)">修改
            </el-button>
             <el-button
              size="small"
              @click="delectSeek(scope.row.nid)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="添加新闻" v-model="dialogVisible" :show-close="true" width="30%">
          <el-form :model="newsForm" ref="newsForm" :rules="rules">
            <el-form-item label="新闻类型" label-width="100px" prop="title">
            <el-select v-model="newsForm.type"  label-width="100px" placeholder="请选择">
              <el-option label="一周爆闻" value="1"></el-option>
              <el-option label="新手开店" value="2"></el-option>
              <el-option label="精选干货" value="3"></el-option>
              <el-option label="电商资讯" value="4"></el-option>
            </el-select>
             </el-form-item>
            <el-form-item label="标题" label-width="100px" prop="title">
              <el-input v-model="newsForm.title"></el-input>
            </el-form-item>
             <el-form-item label="小标题" label-width="100px" prop="title">
              <el-input v-model="newsForm.nstitle"></el-input>
            </el-form-item>
            <el-form-item label="内容" label-width="100px"  prop="cont">
              <quill-editor 
                v-model="newsForm.cont" 
                ref="myQuillEditor" 
                :options="editorOption" 
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
           </quill-editor>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveManager('newsForm')" :loading="hasSubmit">保存</el-button>
        </span>
      </el-dialog>
        <el-dialog title="修改新闻" v-model="upDialogVisible" :show-close="true" size="" >
          <el-form :model="UpnewsForm" ref="UpnewsForm" :rules="rules">
            <el-form-item label="新闻类型" label-width="100px" prop="title">
            <el-select v-model="UpnewsForm.type"  label-width="100px" placeholder="请选择">
              <el-option label="一周爆闻" value="1"></el-option>
              <el-option label="新手开店" value="2"></el-option>
              <el-option label="精选干货" value="3"></el-option>
              <el-option label="电商资讯" value="4"></el-option>
            </el-select>
             </el-form-item>
            <el-form-item label="标题" label-width="100px" prop="title">
              <el-input v-model="UpnewsForm.title"></el-input>
            </el-form-item>
             <el-form-item label="小标题" label-width="100px" prop="nstitle">
              <el-input v-model="UpnewsForm.nstitle"></el-input>
            </el-form-item>
            <el-form-item label="内容" label-width="100px"  prop="cont">
            <quill-editor 
            v-model="UpnewsForm.cont" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
           </quill-editor>
            </el-form-item>
            <textarea v-model="UpnewsForm.cont"  rows="15" cols="20" ></textarea>
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
          type: '',
          cont: '',
          title:'',
          nstitle:''
        },
        UpnewsForm:{
          type: '',
          cont: '',
          title:'',
          nstitle:'',
          nid:''
        },
        hasSubmit: false,
        dialogVisible: false,
        upDialogVisible:false,
        rules: {
          type: [
            { required: true, message: '请输入类型', trigger: 'blur' },
          ],
          cont: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ],
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
          ],
          nstitle: [
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
          url: configUrl.findnews+self.pageNo+"/"+self.pageSize+"",
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
      updateSeek(ndate,nstitle,ncontent,ntype,nid,title){
        var self= this;
         self.UpnewsForm= {
                  type: '',
                  cont: ncontent,
                  title:title,
                  nstitle:nstitle,
                  nid:nid
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
              "ntype":self.newsForm.type,
              "ntitle":self.newsForm.title,
              "ncontent":self.newsForm.cont,
              "nreadcount":100,
              "nstitle":self.newsForm.nstitle
            };
          let opt = {
            url: configUrl.newsadd,
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
              "ntype":self.UpnewsForm.type,
              "ntitle":self.UpnewsForm.title,
              "ncontent":self.UpnewsForm.cont,
              "nreadcount":100,
              "nstitle":self.UpnewsForm.nstitle,
             "nid":self.UpnewsForm.nid

            };
          let opt = {
            url: configUrl.newup,
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
