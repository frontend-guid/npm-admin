<template>
  <el-form-item :label="formItem.label" prop="formItem.name">
    <el-input v-model="inputData" :placeholder="formItem.placeholder" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'yg-input',

  data () {
    return {
      inputData: ''
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
