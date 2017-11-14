<template>
  <div class="container">
    <h1>
      <a>
        <img :src="headerLogo" width="40" class="nav-logo"/>
        {{ $t("headerTitle") }}
      </a>
    </h1>
    <v-header-nav :username="headerUser.username"></v-header-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * Header组件
   * - headerLogo属性
   * - headerTitle属性
   * - headerUser属性
   * - headerNav子组件
   */
  import VHeaderNav from 'components/header/header-nav'

  export default {
    props: {
      headerLogo: {
        type: String,
        default: ''
      },
      headerTitle: {
        type: String,
        default: ''
      },
      headerUser: {
        type: Object
      }
    },
    data () {
      return {

      }
    },
    components: {
      VHeaderNav
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  @import '../../common/css/color';
  header {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;
    line-height: 60px;
    color: @dark-white;
    background-color: @blue;
    .container {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0 auto;
      box-sizing: border-box;
      h1 {
        margin: 0;
        float: left;
      }
      .nav-logo {
        vertical-align: middle;
      }
    }
  }
</style>
