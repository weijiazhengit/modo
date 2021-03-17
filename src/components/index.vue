<template>
  <el-container class="container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggleBtn" @click="toggleCollapse">
          <i class="el-icon-s-operation"></i>
        </div>
        <el-menu
          background-color="#4a5064"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="$router.path"
          router
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-submenu index="/case">
            <template slot="title">
              <i>
                <img src="../assets/icon/case.png" class="icon_img" alt="" />
              </i>
              <span class="menu_title">案件</span>
            </template>
            <el-menu-item index="/case">
              案件
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #4a5064;
  color: #fff;
  text-align: center;
  line-height: 200px;
  overflow: hidden;
}

.el-main {
  background-color: #fff;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
.toggleBtn {
  line-height: 50px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  color: #fff;
}

::v-deep .el-submenu__title {
  padding: 0 !important;
  padding-left: 0 !important;
}
.el-menu {
}
.el-submenu .el-menu-item {
}
.icon_img {
  width: 26px;
  height: 26px;
  max-height: 26px;
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
}
.menu_title {
  color: #fff;
}
</style>
