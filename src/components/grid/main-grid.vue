<template>
  <div>
    <main-tools
      @upload="handleUpload"
      @add="handleAdd"
      @share="handleShare"
      @more="handleMore"
      @authorize="handleAuthorize"
      @grid="handleGrid"
      @refresh="handleRefresh"
      :isLoading="isLoading"
      :isShow="isShow"
      :currentSelect="currentSelect"
    ></main-tools>
    <el-table
      ref="multipleTable"
      :data="datalist"
      tooltip-effect="dark"
      max-height="550"
      @selection-change="handleSelectionChange"
      @row-contextmenu="rightClick"
      @row-click="rowClick"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        sortable
        prop="name"
        :label="$t('file_name')">
        <template slot-scope="scope">
          <span v-if="!scope.row.flag">
            <i class="file" :class="scope.row.type"></i>
            {{ scope.row.name }} {{scope.row.flag}}
          </span>
          <span class="add-file" v-else>
            <el-input
              style="width: 70%"
              size="small"
              placeholder="请输入内容"
              v-model="name">
            </el-input>
            <div class="add-file-button">
              <el-button type="text" icon="el-icon-check" @click="handleSave"></el-button>
              <el-button type="text" icon="el-icon-close" @click="handleCancel"></el-button>
            </div>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        sortable
        :label="$t('update_time')">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        sortable
        prop="create"
        :label="$t('create_person')"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[20, 40, 80, 100]"
        :page-size="20"
        layout="sizes, prev, pager, next"
        :total="40">
      </el-pagination>
    </div>
    <transition name="el-zoom-in-top">
      <el-card id="right_mouse_menu" ref="right_mouse_menu" class="box-card right-menu" v-show="show">
        <div class="item">{{ $t("open") }}</div>
        <div class="item">{{ $t("share") }}</div>
        <div class="item">{{ $t("authorize") }}</div>
        <div class="item">{{ $t("tag") }}</div>
        <div class="item">{{ $t("copy") }}</div>
        <div class="item">{{ $t("download") }}</div>
      </el-card>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import MainTools from '../tools/tools'

  export default {
    data () {
      return {
        multipleSelection: [],
        name: '',
        type: '',
        isShow: false,
        isLoading: false,
        currentSelect: {},
        show: false
      }
    },
    props: {
      datalist: {
        type: Array
      }
    },
    methods: {
      handleUpload () {
        this.$emit('upload')
      },
      handleAdd (type) {
        this.isLoading = true
        this.type = type
        this.datalist.unshift({
          flag: true
        })
      },
      handleSave () {
        this.isLoading = false
        this.datalist.splice(0, 1)
        this.$emit('save', this.name, this.type)
        this.name = ''
        this.type = ''
      },
      handleCancel () {
        this.isLoading = false
        this.datalist.splice(0, 1)
        this.name = ''
        this.type = ''
      },
      handleShare (obj) {
        this.$emit('share', obj)
      },
      handleMore (type, obj) {
        this.$emit('more', type, obj)
      },
      handleAuthorize (obj) {
        this.$emit('authorize', obj)
      },
      handleGrid () {
        this.$emit('grid')
      },
      handleRefresh (loading) {
        this.$emit('refresh', loading)
      },
      handleSelectionChange (val) {
        this.currentSelect = val[0]
        this.multipleSelection = val
        if (this.multipleSelection.length !== 1) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      },
      handleSizeChange (val) {
        console.log(val)
      },
      handleCurrentChange (val) {
        console.log(val)
      },
      rightClick (row, event) {
        this.show = !this.show
        this.$refs.right_mouse_menu.$el.style.left = event.screenX + 'px'
        this.$refs.right_mouse_menu.$el.style.top = (event.screenY - 100) + 'px'
      },
      rowClick (row, event, col) {
        this.$emit('row-click', row)
      }
    },
    components: {
      MainTools
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  @import '../../common/css/color';
  .add-file {
    .add-file-button {
      float: right;
      width: 30%;
      padding-left: 5px;
    }
  }
  .page {
    padding: 8px 0;
    text-align: right
  }
  .right-menu {
    position: fixed;
    width: 150px;
    left: 0;
    top: 0;
    /*display: none;*/
    z-index: 12000;
    padding: 0;
    .el-card__body {
      padding: 0;
      .item {
        padding: 7px;
        border-bottom: 1px solid #e6ebf5;
        text-align: center;
        color: @blue;
        font-size: 0.7rem;
      }
      .item:hover {
        color: @light-black;
        background-color: #e6ebf5;
      }
    }
  }
</style>
