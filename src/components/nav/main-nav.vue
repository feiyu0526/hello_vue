<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="n in navs" :to="n.path" :key="n.path">{{ $t(n.name) }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      navs: {
        type: Array
      }
    }
  }
</script>

<style lang="less" ref="stylesheet/less">

</style>
