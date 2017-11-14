<template>
  <el-row id="menu" :style="{width: isCollapse ? '65px' : '200px', backgroundColor: '#545c64'}">
    <el-col :span="24" v-on:dblclick.native="_collapse">
      <el-menu
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :unique-opened="isUnique"
        :router="true"
        @select="_select"
      >
        <template v-for="item in menus" v-if="menuUser.auth.includes(item.auth)">
          <el-submenu :index="item.index" v-if="item.child">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="i in item.child">
              <el-submenu :index="i.index" v-if="i.child">
                <template slot="title">{{ i.name }}</template>
                <el-menu-item :index="last.index" v-for="last in i.child" :key="last.index">{{ last.name }}</el-menu-item>
              </el-submenu>
              <el-menu-item-group v-else>
                <el-menu-item :index="i.index">{{ i.name }}</el-menu-item>
              </el-menu-item-group>
            </template>
          </el-submenu>
          <el-menu-item :index="item.index" v-else>
            <i :class="item.icon"></i>
            <span slot="title">{{ $t(item.name) }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import menus from './menu.json'
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    created () {
      this._initMenu()
    },
    props: {
      isCollapsed: {
        type: Boolean,
        default: true
      },
      isUniqued: {
        type: Boolean,
        default: false
      },
      menuUser: {
        type: Object
      }
    },

    data () {
      return {
        isCollapse: true,
        isUnique: false
      }
    },
    computed: {
      ...mapGetters([
        'menus'
      ])
    },
    methods: {
      _collapse () {
        this.isCollapse = !this.isCollapse
      },
      _initMenu () {
        this.isCollapse = this.isCollapsed
        this.isUnique = this.isUniqued
        this.setMenus(menus)
      },
      ...mapMutations({
        setMenus: 'SET_MENUS'
      }),
      _select (path) {
        console.log(path)
      }
    }
  }
</script>

<style lang="less" ref="stylesheet/less">

</style>
