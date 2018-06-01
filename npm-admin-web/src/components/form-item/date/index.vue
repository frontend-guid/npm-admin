<template>
  <el-form-item :label="formItem.label" prop="formItem.name">
    <el-date-picker
    v-model="inputData"
    :type="formItem.dateType ? formItem.dateType : 'datetimerange'"
    :picker-options="pickerOptions"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    align="right"
    value-format="yyyy-MM-dd HH:mm:ss">
  </el-date-picker>
</el-form-item>
</template>

<script>
export default {
  name: 'yg-date',

  data () {
    return {
      inputData: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    };
  },

  props: {
    formItem: {},
    data: {}
  },

  watch: {
    inputData (val) {
      this.$emit('update:data', val);
    },
    data (val) {
      if (val === null) {
        this.inputData = null;
      }
    }
  }
};
</script>

<style></style>
