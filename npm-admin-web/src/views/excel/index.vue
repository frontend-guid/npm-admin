<template>
  <div class="container">
    <el-button @click="exportData">export</el-button>
  </div>
</template>

<script>
import {exportJson2Excel} from '@/common/js/export2Excel';

export default {
  name: 'excel',

  data () {
    return {};
  },

  mounted () {
  },

  methods: {
    exportData () {
      const jsonData = [
      {
        name: 'xyy',
        gender: 'f',
        age: '111111111111111111.11111111111111111111111'
      },
      {
        name: 'xyy',
        gender: 'f',
        age: '222222222222222222222222222222222222222222'
      },
      {
        name: 'xyy',
        gender: 'f',
        age: '33333333333333333333333333333333333333333'
      }
      ];
      exportJson2Excel(jsonData, '测试');
    }
  }
};
</script>

<style scoped lang="less">
.container {

}
</style>
