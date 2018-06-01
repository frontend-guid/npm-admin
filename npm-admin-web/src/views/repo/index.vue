<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'Repo',

    data () {
      return {};
    }
  };
</script>

<style scoped lang="less"></style>
