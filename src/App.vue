<script lang="ts" setup>
import 'element-plus/theme-chalk/dark/css-vars.css'

import Menu from '@/Menu.vue'
import MenuForMobile from '@/MenuForMobile.vue'
// import looksLikeMobile from '@/components/looksLikeMobile'
import isMobile from '@/components/isMobile'

// import { ref } from 'vue'

</script>

<template>
  <el-container>

    <el-aside v-if="!isMobile">
      <Menu></Menu>
    </el-aside>

    <el-main id="el-main">
      <!-- <el-scrollbar always> -->
      <Suspense>
        <router-view />
      </Suspense>
      <!-- </el-scrollbar> -->
    </el-main>

    <el-footer v-if="isMobile">
      <MenuForMobile></MenuForMobile>
    </el-footer>

  </el-container>
</template>

<style src="./assets/App.scss"></style>
