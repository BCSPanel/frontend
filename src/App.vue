<script lang="ts" setup>
import 'element-plus/theme-chalk/dark/css-vars.css'

import Menu from '@/Menu.vue'
// import MenuForMobile from '@/MenuForMobile.vue'
// import looksLikeMobile from '@/components/looksLikeMobile'
// import isMobile from '@/components/isMobile'

// import { ref } from 'vue'

</script>

<template>
  <el-container>

    <!-- <el-aside v-if="!isMobile"> -->
    <el-aside>
      <Menu></Menu>
    </el-aside>

    <el-main id="el-main">
      <!-- <el-scrollbar always> -->
      <Suspense>
        <router-view />
      </Suspense>
      <!-- </el-scrollbar> -->
    </el-main>

    <!-- <el-footer v-if="isMobile">
      <MenuForMobile></MenuForMobile>
    </el-footer> -->

  </el-container>
</template>

<style lang="scss">
* {
  font-family: system-ui;
}

.el-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .el-aside {
    width: 140px;
    height: 100%;
    background-color: hsl(210, 100%, 100%, 93%);
  }

  .el-main {
    padding: 12px;
    /* margin: 8px; */
    transition: var(--el-transition-duration);
    /* overflow-y: hidden; */

    .el-card {
      --el-card-border-radius: 12px;
      /* transition: width 0s; */
    }
  }

  .el-footer {
    --el-footer-padding: 0;
  }
}

html.dark {
  .el-container {
    .el-aside {
      background-color: hsla(0, 0%, 0%, 50%);
    }
  }
}
</style>
