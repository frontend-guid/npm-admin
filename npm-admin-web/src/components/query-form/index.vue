<template>
  <div class="container">
    <div class="query-form">
      <el-form :inline="true" ref="queryForm" label-width="100px" label-position="right">
       <component :is="com.componentType" :formItem="com.formItem" :data.sync="queryModel[com.formItem.name]" v-for="(com,index) in components" :key="index">
       </component>
       <el-form-item style="margin-left: 50px;">
        <el-button type="warning" @click="resetForm">重置</el-button>
        <el-button type="primary" @click="queryForm">查询</el-button>
        <el-button type="primary" @click="addForm">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import YgInput from '@/components/form-item/input';
import YgSelect from '@/components/form-item/select';
import YgDate from '@/components/form-item/date';

export default {
  name: 'query-form',

  components: {
    YgInput,
    YgSelect,
    YgDate
  },

  data () {
    return {
      components: []
    };
  },

  props: {
    querySchema: {},
    queryModel: {},
    model: {}
  },

  methods: {
    _initComponent () {
      this.querySchema.forEach(schema => {
        // input
        if (schema.type && schema.type === 'input') {
          this.components.push({
            componentType: 'yg-input',
            formItem: schema
          });
        }

        // select
        if (schema.type && schema.type === 'select') {
          this.components.push({
            componentType: 'yg-select',
            formItem: schema
          });
        }

        // datepicker
        if (schema.type && schema.type === 'date') {
          this.components.push({
            componentType: 'yg-date',
            formItem: schema
          });
        }
      });
    },

    resetForm () {
      Object.keys(this.queryModel).forEach(key => {
        // 特殊处理
        // pageindex和pagesize不能设为null
        if (key === 'PageIndex') {
          this.queryModel[key] = 1;
        } else if (key === 'PageSize') {
          this.queryModel[key] = 10;
        } else {
          this.queryModel[key] = null;
        }
      });
    },

    queryForm () {
      this.$emit('queryclick');
    },

    addForm () {
      this.$emit('addclick');
    }
  },

  mounted () {
    this._initComponent();
  }
};
</script>

<style lang="less" scoped>
.container {
  .bread-crumb {
    margin: 10px 0 30px 0;
  }
  .query-form {

  }
}
</style>
