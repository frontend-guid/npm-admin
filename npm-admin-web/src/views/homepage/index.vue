<template>
  <div class="homepage-wrapper">
    <el-carousel :interval="5000" arrow="always" height="600px">
      <el-carousel-item v-for="item in pics" :key="item" >
          <img :src="item" alt="" width="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import P1 from './1.jpg';
import P2 from './2.jpg';

export default {
  name: 'HomePage',

  data () {
    return {
      pics: [P1, P2]
    };
  }
};
</script>

<style scoped lang="less">

</style>
