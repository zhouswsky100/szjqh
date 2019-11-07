<template>
  <div>
    <div class="minh100">
      <el-table
        :data="seekList"
        border
        style="width: 100%"
        fit
        v-loading.body="loadingData"
        element-loading-text="拼命加载中">
        <el-table-column
          label="学员姓名"
          width="200"
          align="center"
          prop="lname"
        >
        </el-table-column>
        <el-table-column
          label="学员电话"
          width="200"
          align="center"
          prop="lphone"
        >
        </el-table-column>
        <el-table-column
          label="意向科目"
          width="200"
          align="center"
          prop="ltype"
        >
        <template scope="scope">
            <span style="margin-left: 10px" >{{ scope.row.ltype | filterNewsType}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="咨询内容"
          width="400"
          align="center"
          prop="lread"
        >
        </el-table-column>
        <el-table-column
          label="操作" align="center">
          <template scope="scope">
            <el-button
              size="small"
              @click="delectSeek(scope.row.lid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  export default {
    data () {
      return {
        seekList: [],
        dialogVisibleKF:false,
        loadingData: true,
        hasSubmit: false,
        pageNo: 1,
        pageSize: 10,
        total: 100,
      }
    },
    created () {
      this.initGrid()
    },
    methods: {
      //初始化加载咨询内容
      initGrid:function(){
        let self = this;
        let opt = {
          url: configUrl.seeklist+self.pageNo+"/"+self.pageSize+"",
          type: 'get',
          success: function (data) {
            self.seekList=data.datas;
            self.loadingData=false;
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
     //删除咨询内容
      delectSeek (id){
        let self = this;
        let opt = {
            url: configUrl.seekdelete+id+"",
            type: 'get',
          success: function (data) {
            self.$message({
              showClose: true,
              message: "删除成功",
              type:'success'
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
        util.getMyCompGetRequest(opt);
      
      },
       changePage (page) {
        this.pageNo = page
        this.initGrid()
      },
    },
     filters: {
        filterNewsType(value) {
         var  obj = ["实操班","运营班","孵化班","定制化课程班"]
           return obj[--value];
        },
    
    },
  }
</script>
<style scope>
  .el-form--inline .el-form-item__label {
    float: left;
  }
</style>
