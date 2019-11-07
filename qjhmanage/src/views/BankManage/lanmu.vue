<template>
  <div>
	<textarea id="result"  style ="font-size:16px" rows="10" cols="150"></textarea>
 <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="upNews()" >保存</el-button>
        </span>
  </div>
</template>
<script>

  import util from '../../utils/util.js'
  import configUrl from '../../data/configUrl'
  import $ from 'jquery'

  export default {
    data () {
      return {
    
        UpnewsForm:{
          cont: '',
       
        },
  
      }
    },
    created () {
      this.initGrid()
    },
    methods: {
      initGrid:function(){
        let self = this;
       $.ajax({
        url :configUrl.dh,
        ContentType:'application/x-www-form-urlencoded',
        type : "get", 
        success : function(data) {
          //alert(data);
          $("#result").html(JSON.stringify(data)); 
        }
      });
      },
  
    
    
  
       upNews (){
        	var datas={
		          	content:$("#result").val()
			
	          }
          $.ajax({
            url : configUrl.dhUpdate,
            type : "post", 
            data:datas,
            success : function(data) {
              //alert(data);
              $("#result").html(JSON.stringify(data)); 
            }
          });
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
