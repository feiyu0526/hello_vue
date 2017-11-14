<template>
  <ul class="nav">
    <li class="nav-item">
      <a>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal">
              <i class="el-icon-setting"></i>
              {{ $t("setting") }}</el-dropdown-item>
            <el-dropdown-item command="client">
              <i class="el-icon-download"></i>
              {{ $t("downloadClient") }}
            </el-dropdown-item>
            <el-dropdown-item command="lang" divided>
              <i class="el-icon-location-outline"></i>
              {{ $t("language") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </a>
    </li>
    <li class="nav-item">
      <a class="active" href="#" @click="manager">
        <i class="el-icon-download"></i>
        {{ $t("manage") }}
      </a>
    </li>
    <li class="nav-item">
      <a class="" href="#" @click="logout">
        <i class="el-icon-circle-close-outline"></i>
        {{ $t("logout") }}
      </a>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  /**
   * HeaderNav组件
   */
  export default {
    props: {
      username: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    methods: {
      logout () {
        alert('logout')
      },
      manager () {
        alert('manager')
      },
      handleCommand (command) {
        if (command === 'lang') {
          this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
        } else {
          alert('click on item ' + command)
        }
      }
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  @import '../../common/css/color';
  header {
    .nav {
      float: right;
      height: 100%;
      background: transparent;
      padding: 0;
      margin: 0;
      .nav-item {
        margin: 0;
        float: left;
        list-style: none;
        position: relative;
        div {
          font-size: 1rem;
        }
        span {
          color: @dark-white;
        }
        a {
          text-decoration: none;
          color: @dark-white;
          display: block;
          padding: 0 22px;
        }
        a.active:after {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 10px;
          left: calc(50% - 12px);
          width: 24px;
          height: 4px;
          background: @dark-white;
        }
      }
    }
  }
</style>
