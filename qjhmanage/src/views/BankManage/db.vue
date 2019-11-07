<template>
  <div>
    <div class="minh100">
      <button @click="getDB">获取数据库文件</button>
    </div>
  
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
    },
    methods: {
          getDB:function(){
              
             let self = this;
              let opt = {
              url: configUrl.sql,
              type: 'get',
              success: function (data) {
                  
               window.location.href="http://112.30.128.52/dbscript/"+ data.datas
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

          }
    },
     filters: {
        filterNewsType(value) {
         var  obj = ["大师班","特训营","特战旅"]
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
