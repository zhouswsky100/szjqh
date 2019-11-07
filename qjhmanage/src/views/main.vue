<template>
  <div id="panel-1011-innerCt" class="">
    <div class="fl">
      <h3>聚企汇管理系统</h3>
      <p>描述：门户网站基础管理</p>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  import Util from '../utils/util';
  export default {
    mounted () {
      if (window.requestAnimationFrame) {
        Util.drawBg();
      }
    }
  }
</script>
<style scoped>

</style>
