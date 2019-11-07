<template>
  <div>
    <div class="min2300" style="    width: 2200px;">
      <el-table
        :data="tableData"
        border
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="课程名称"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.cname">{{ scope.row.cname }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="课程价格"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.cmoney">{{ scope.row.cmoney }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="描述1"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.miaoshu1">{{ scope.row.miaoshu1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="描述2"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.row.miaoshu2">{{ scope.row.miaoshu2 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="描述3"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.mniaoshu3">{{ scope.row.mniaoshu3 }}</span>
          </template>
        </el-table-column>
           <el-table-column
          label="描述4"
          width="280"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.miaoshu4">{{ scope.row.miaoshu4 }}</span>
          </template>
        </el-table-column>
           <el-table-column
          label="描述5"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.tese1">{{ scope.row.tese1 }}</span>
          </template>
        </el-table-column>
          <el-table-column
          label="描述6"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.tese1">{{ scope.row.tese2 }}</span>
          </template>
        </el-table-column>
          <el-table-column
          label="描述7"
          width="180"
          align="center">
          <template scope="scope">
            <span style="margin-left: 10px" :title="scope.tese">{{ scope.row.tese3 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作" align="center">
          <template scope="scope">
             <el-button
              size="small"
              @click="addSeek()">新增课程
            </el-button>
            <el-button
              size="small"
              @click="updateSeek( scope.row.cid,scope.row.cname,scope.row.cmoney,scope.row.miaoshu1,scope.row.miaoshu2,scope.row.mniaoshu3,scope.row.miaoshu4,scope.row.tese1,scope.row.tese2,scope.row.tese3)">修改
            </el-button>
             <el-button
              size="small"
              @click="delectSeek(scope.row.cid)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="添加课程" v-model="dialogVisible" :show-close="true" width="30%">
          <el-form :model="newsForm" ref="newsForm" :rules="rules">
          
            <el-form-item label="课程名称" label-width="100px" prop="cname">
              <el-input v-model="newsForm.cname"></el-input>
            </el-form-item>
             <el-form-item label="课程价格" label-width="100px" prop="cmoney">
              <el-input v-model="newsForm.cmoney"></el-input>
            </el-form-item>
               <el-form-item label="描述1" label-width="100px" prop="miaoshu1">
              <el-input v-model="newsForm.miaoshu1"></el-input>
            </el-form-item>
               <el-form-item label="描述2" label-width="100px" prop="miaoshu2">
              <el-input v-model="newsForm.miaoshu2"></el-input>
            </el-form-item>
               <el-form-item label="描述3" label-width="100px" prop="mniaoshu3">
              <el-input v-model="newsForm.mniaoshu3"></el-input>
            </el-form-item>
               <el-form-item label="描述4" label-width="100px" prop="miaoshu4">
              <el-input v-model="newsForm.miaoshu4"></el-input>
            </el-form-item>
               <el-form-item label="描述5" label-width="100px" prop="tese1">
              <el-input v-model="newsForm.tese1"></el-input>
            </el-form-item>
               <el-form-item label="描述6" label-width="100px" prop="tese2">
              <el-input v-model="newsForm.tese2"></el-input>
            </el-form-item>
               <el-form-item label="描述7" label-width="100px" prop="tese3">
              <el-input v-model="newsForm.tese3"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveManager('newsForm')" :loading="hasSubmit">保存</el-button>
        </span>
      </el-dialog>
        <el-dialog title="修改课程" v-model="upDialogVisible" :show-close="true" size="" >
            <el-form :model="UpnewsForm" ref="UpnewsForm" :rules="rules">
            <el-form-item label="课程名称" label-width="100px" prop="cname">
              <el-input v-model="UpnewsForm.cname"></el-input>
            </el-form-item>
             <el-form-item label="课程价格" label-width="100px" prop="cmoney">
              <el-input v-model="UpnewsForm.cmoney"></el-input>
            </el-form-item>
               <el-form-item label="描述1" label-width="100px" prop="miaoshu1">
              <el-input v-model="UpnewsForm.miaoshu1"></el-input>
            </el-form-item>
               <el-form-item label="描述2" label-width="100px" prop="miaoshu2">
              <el-input v-model="UpnewsForm.miaoshu2"></el-input>
            </el-form-item>
               <el-form-item label="描述3" label-width="100px" prop="mniaoshu3">
              <el-input v-model="UpnewsForm.mniaoshu3"></el-input>
            </el-form-item>
               <el-form-item label="描述4" label-width="100px" prop="miaoshu4">
              <el-input v-model="UpnewsForm.miaoshu4"></el-input>
            </el-form-item>
               <el-form-item label="描述5" label-width="100px" prop="tese1">
              <el-input v-model="UpnewsForm.tese1"></el-input>
            </el-form-item>
               <el-form-item label="描述6" label-width="100px" prop="tese2">
              <el-input v-model="UpnewsForm.tese2"></el-input>
            </el-form-item>
               <el-form-item label="描述7" label-width="100px" prop="tese3">
              <el-input v-model="UpnewsForm.tese3"></el-input>
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
          cname:'',
          cmoney:'',
          miaoshu1:'',
          miaoshu2:'',
          mniaoshu3:'',
          miaoshu4:'',
          tese1:'',
          tese2:'',
          tese3:''
          
        },
        UpnewsForm:{
          cid: '',
          cname:'',
          cmoney:'',
          miaoshu1:'',
          miaoshu2:'',
          mniaoshu3:'',
          miaoshu4:'',
          tese1:'',
          tese2:'',
          tese3:''
        },
        hasSubmit: false,
        dialogVisible: false,
        upDialogVisible:false,
        rules: {
          cname: [
            { required: true, message: '请输入课程名称', trigger: 'blur' },
          ],
          cmoney: [
            { required: true, message: '请输入价格', trigger: 'blur' },
          ],
          miaoshu1: [
            { required: true, message: '请输入描述', trigger: 'blur' },
          ],
          miaoshu2: [
            { required: true, message: '请输入描述', trigger: 'blur' },
          ],
           mniaoshu3: [
            { required: true, message: '请输入描述', trigger: 'blur' },
          ],
           tese1: [
            { required: true, message: '请输入描述', trigger: 'blur' },
          ],
           tese2: [
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
          url: configUrl.kecheng,
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
      updateSeek(cid,cname,cmoney,miaoshu1,miaoshu2,mniaoshu3,miaoshu4,tese1,tese2,tese3){
        var self= this;
         self.UpnewsForm= {
                  cid: cid,
                  cname:cname,
                  cmoney:cmoney,
                  miaoshu1:miaoshu1,
                  miaoshu2:miaoshu2,
                  mniaoshu3:mniaoshu3,
                  miaoshu4:miaoshu4,
                  tese1:tese1,
                  tese2:tese2,
                  tese3:tese3
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
              "cname":self.newsForm.cname,
              "cmoney":self.newsForm.cmoney,
              "miaoshu1":self.newsForm.miaoshu1,
              "miaoshu2":self.newsForm.miaoshu2,
              "mniaoshu3":self.newsForm.mniaoshu3,
              "miaoshu4":self.newsForm.miaoshu4,
              "tese1":self.newsForm.tese1,
              "tese2":self.newsForm.tese2,
              "tese3":self.newsForm.tese3,

            };
          let opt = {
            url: configUrl.kechengAdd,
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
              "cid":self.UpnewsForm.cid,
              "cname":self.UpnewsForm.cname,
              "cmoney":self.UpnewsForm.cmoney,
              "miaoshu1":self.UpnewsForm.miaoshu1,
              "miaoshu2":self.UpnewsForm.miaoshu2,
              "mniaoshu3":self.UpnewsForm.mniaoshu3,
              "miaoshu4":self.UpnewsForm.miaoshu4,
              "tese1":self.UpnewsForm.tese1,
              "tese2":self.UpnewsForm.tese2,
              "tese3":self.UpnewsForm.tese3,


            };
          let opt = {
            url: configUrl.kechengUpdate,
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
              url: configUrl.kechengDelete,
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
        }
    },
  }
</script>
<style scope>
  .el-form--inline .el-form-item__label {
    float: left;
  }
</style>
