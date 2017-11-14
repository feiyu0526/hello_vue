<template>
  <div>
    <el-button type="primary" icon="el-icon-upload" size="small" @click="handleUpload" v-auth:upload>{{ $t("upload") }}</el-button>
    <el-dropdown @command="handleAdd" v-auth:add>
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" :loading="isLoading">{{ $t("new") }}</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="folder">{{ $t("folder") }}</el-dropdown-item>
        <el-dropdown-item command="word">{{ $t("word") }}</el-dropdown-item>
        <el-dropdown-item command="ppt">{{ $t("ppt") }}</el-dropdown-item>
        <el-dropdown-item command="excel">{{ $t("excel") }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span v-if="isShow">
      <el-button type="primary" icon="el-icon-share" size="small" @click="handleShare" v-auth:share>{{ $t("share") }}</el-button>
      <el-dropdown @command="handleMore" v-auth:more>
        <el-button type="primary" size="small">{{ $t("more") }}</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="collect">{{ $t("collect") }}</el-dropdown-item>
          <el-dropdown-item command="tag">{{ $t("tag") }}</el-dropdown-item>
          <el-dropdown-item command="copy">{{ $t("copy") }}</el-dropdown-item>
          <el-dropdown-item command="download">{{ $t("download") }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="primary" icon="el-icon-warning" size="small" @click="handleAuthorize" v-auth:authorize>{{ $t("authorize") }}</el-button>
    </span>
    <div class="tools-right">
      <el-button type="text" icon="el-icon-menu" @click="handleGrid"></el-button>
      <el-button type="text" icon="el-icon-refresh" @click="handleRefresh"></el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      currentSelect: {
        type: Object
      }
    },
    data () {
      return {

      }
    },
    methods: {
      handleUpload () {
        this.$emit('upload')
      },
      handleAdd (command) {
        this.$emit('add', command)
      },
      handleShare () {
        this.$emit('share', this.currentSelect)
      },
      handleMore (command) {
        this.$emit('more', command, this.currentSelect)
      },
      handleAuthorize () {
        this.$emit('authorize', this.currentSelect)
      },
      handleGrid () {
        this.$emit('grid')
      },
      handleRefresh () {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        this.$emit('refresh', loading)
      }
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  .tools-right {
    float: right;
  }
</style>
