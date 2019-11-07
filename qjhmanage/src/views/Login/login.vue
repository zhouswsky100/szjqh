<template>
  <div class="minh600">
    <el-dialog title="后台管理系统登录" v-model="dialogVisible" :show-close="true" size="tiny" align="center">
      <el-form :model="loginForm" ref="loginForm" :rules="rules">
        <el-form-item label="用户名" label-width="100px" prop="uname">
          <el-input v-model="loginForm.uname"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" prop="upass">
          <el-input  type="password" v-model="loginForm.upass"></el-input>
        </el-form-item>
      </el-form>
      <span style="color: #20a0ff;cursor: pointer;" @click="uplogin">修改密码</span>
      <span slot="footer" class="dialog-footer" align="center">
         <el-button type="primary" @click="saveManager('loginForm')" :loading="hasSubmit">立即登录</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改密码" v-model="upDialogVisible" :show-close="true" size="" width="30%">
          <el-form :model="UpnewsForm" ref="UpnewsForm" :rules="rules">
             <el-form-item label="用户名" label-width="100px" prop="nstitle">
              <el-input v-model="UpnewsForm.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="100px"  prop="cont">
              <el-input type="password" v-model="UpnewsForm.upass"></el-input>

            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="upManager('UpnewsForm')" :loading="hasSubmit">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
  import util from '../../utils/util.js'
  import configUrl from '../../data/configUrl'
  import md5 from 'js-md5';
  export default {
    data () {
      return {
        dialogVisible: true,
        upDialogVisible:false,
        loginForm: {
            uname: '',
            upass: '',
        },
        UpnewsForm: {
            uname: '',
            upass: '',
        },
        
        hasSubmit: false,
        rules: {
          uname: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          upass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        
        },
        
      }
    },
    watch: {
      dialogVisible: function (newVal, oldVal) {
        if (!newVal) {
          this.$refs.loginForm.resetFields();
          let initForm= {
            uname: '',
            upass: '',
          };
          this.loginForm=initForm
        }
      },
    },
    methods: {
      saveManager(formName) {
        console.log(formName)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.adminLogin();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     upManager(formName) {
        console.log(formName)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.adminUp();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      adminUp(){
        let self = this;
        let opt = {
          url: configUrl.updateAccount,
          type: 'post',
          data:self.UpnewsForm,
          success: function (data) {
            self.$message({
              showClose: true,
              message: "修改成功",
              type: 'success'
            });
          self.upDialogVisible = false;

          },
          fail: function (resp) {
            self.$message({
              showClose: true,
              message: "账号或密码错误",
              type: 'error'
            });


            self.hasSubmit=false;
          }
        };
        if(!this.hasSubmit) {
          this.hasSubmit=true;
          util.getMyCompPostRequest(opt);
        }
      },
      
      adminLogin(){
        let self = this;
        let opt = {
          url: configUrl.adminLogin,
          type: 'post',
          data:self.loginForm,
          success: function (data) {
            self.$message({
              showClose: true,
              message: "登录成功",
              type: 'success'
            });
            console.log(data.data)
            self.$router.push({
              path: '/main',
          })
          },
          fail: function (resp) {
            self.$message({
              showClose: true,
              message: "账号或密码错误",
              type: 'error'
            });


            self.hasSubmit=false;
          }
        };
        if(!this.hasSubmit) {
          this.hasSubmit=true;
          util.getMyCompPostRequest(opt);
        }
      },
      uplogin(){
       this.upDialogVisible = true ;

      }
    }
  }
</script>
