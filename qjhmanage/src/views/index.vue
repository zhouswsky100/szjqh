<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div>
      <!-- 顶部代码 -->
        <q-c-header></q-c-header>

        <q-c-menu @side-bar-select="sideBarSelect"></q-c-menu>

        <div class="content">
          <div class="w1870">
            <router-view></router-view>
          </div>
        </div>
    </div>
  </transition>
</template>
<script>
  import { QCHeader, QCMenu } from '../components'
  export default {
    components: {
      QCHeader,
      QCMenu,
    },

    methods: {
      sideBarSelect (index) {
        this.$router.push({
          name: index
        })
      }
    }
  }
</script>
<style scoped>
  .content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding: 16px;
    box-sizing: border-box;
    overflow: auto;
  }
  .w1600 {
    min-width: 1600px;
  }
</style>
