<template>
  <div id="app" @click="global_click">
    <el-container>
      <el-header>
        <v-header
          :header-logo="logo"
          :header-title="title"
          :header-user="user"
        ></v-header>
      </el-header>
      <el-container>
        <v-menu
          :isCollapsed="false"
          :isUniqued="true"
          :menu-user="user"
        ></v-menu>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import VHeader from 'components/header/header'
  import VMenu from 'components/menu/menu'

  export default {
    name: 'app',
    data () {
      return {
        title: this.$t('headerTitle'),
        logo: 'static/logo.png',
        user: {
          username: '大司马',
          auth: ['company', 'personal', 'group', 'share', 'favorite', 'link', 'authorize', 'message']
        }
      }
    },
    components: {
      VHeader,
      VMenu
    },
    methods: {
      global_click () {
        if (document.getElementById('right_mouse_menu')) {
          document.getElementById('right_mouse_menu').style.display = 'none'
        }
      }
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  @import 'common/css/common';
  @import 'common/css/color';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @black;
  }
  .main {
    padding: 0;
    .el-container, .main-row, main-left {
      height: 100%;
    }
  }
</style>
