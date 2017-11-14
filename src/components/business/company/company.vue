<template>
  <el-container direction="vertical">
    <el-row class="main-row">
      <el-col :span="18" class="main-left">
        <div class="main-nav">
          <main-nav
            :navs="navs"
          ></main-nav>
        </div>
        <div class="main-grid">
          <main-grid
            :datalist="data"
            @upload="handleUpload"
            @save="handleSave"
            @share="handleShare"
            @more="handleMore"
            @authorize="handleAuthorize"
            @grid="handleGrid"
            @refresh="handleRefresh"
            @row-click="handleRowClick"
          ></main-grid>
        </div>
      </el-col>

      <el-col :span="6" style="padding: 20px">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <div class="info">
          <p>已用空间：100GB</p>
          <p>总大小：100GB</p>
        </div>
        <div class="info">
          <p>用户数量：20个</p>
          <p>总数量：100个</p>
        </div>

        <el-collapse value="1" v-show="dataInfo.name">
          <el-collapse-item title="详情" name="1">
            <div>名称：{{ dataInfo.name }}</div>
            <div>类型：{{ dataInfo.type }}</div>
            <div>创建：{{ dataInfo.create }}</div>
            <div>更新时间：{{ dataInfo.date }}</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>

  </el-container>
</template>

<script type="text/ecmascript-6">
  import MainNav from '../../nav/main-nav'
  import MainGrid from '../../grid/main-grid'
  import companys from './company_data'

  export default {
    name: 'company',
    data () {
      return {
        navs: [
          {path: '/', name: 'index'},
          {path: '/company', name: 'company_space'}
        ],
        data: companys,
        dataInfo: {}
      }
    },
    methods: {
      handleUpload () {
        alert('upload')
      },
      handleSave (name, type) {
        if (!name) {
          this.$message.error('请输入文件名')
        } else {
          this.data.unshift({
            type: type,
            name: name,
            date: '2017',
            create: 'me'
          })
        }
      },
      handleShare (obj) {
        alert('share - ' + JSON.stringify(obj))
      },
      handleMore (type, obj) {
        alert(type + ' - ' + JSON.stringify(obj))
      },
      handleAuthorize (obj) {
        alert('authorize - ' + JSON.stringify(obj))
      },
      handleGrid () {
        alert('grid')
      },
      handleRefresh (loading) {
        setTimeout(() => {
          loading.close()
        }, 2000)
      },
      handleRowClick (obj) {
        this.dataInfo = obj
      }
    },
    components: {
      MainNav,
      MainGrid
    }
  }
</script>

<style lang="less" ref="stylesheet/less">
  @import '../../../common/css/color';

</style>
