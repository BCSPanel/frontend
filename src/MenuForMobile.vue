<script lang="ts" setup>
import {
    Menu as IconMenu,
    House as IconHouse,
    FolderOpened as IconFolderOpened,
    Avatar as IconAvatar,
    Setting as IconSetting,
} from '@element-plus/icons-vue'

// import logout from './net/logout'
// import isMobile from '@/components/isMobile'

// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route)

const iconSize = 22

</script>

<template>
    <el-menu router mode="horizontal" :ellipsis="false" :default-active="/^\/\w*/.exec($route.path)?.toString()">
        <el-menu-item index="/">
            <el-icon :size="iconSize"><icon-house /></el-icon>
        </el-menu-item>
        <el-menu-item index="/terminals">
            <el-icon :size="iconSize"><icon-menu /></el-icon>
        </el-menu-item>
        <el-menu-item index="/files">
            <el-icon :size="iconSize"><icon-folder-opened /></el-icon>
        </el-menu-item>
        <el-menu-item index="/users">
            <el-icon :size="iconSize"><icon-avatar /></el-icon>
        </el-menu-item>
        <el-menu-item index="/settings">
            <el-icon :size="iconSize"><icon-setting /></el-icon>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.el-menu {
    height: 100%;
    width: 100%;
    transition: var(--el-transition-duration);
    --el-menu-bg-color: hsl(210, 100%, 100%, 93%);
    --el-menu-text-color: hsl(0, 0%, 39%);
    --el-menu-hover-text-color: hsl(0, 0%, 39%);
    --el-menu-active-color: hsl(212, 100%, 50%);
    --el-menu-hover-bg-color: hsl(212, 100%, 96%);
    --el-menu-base-level-padding: 12px;
    justify-content: space-around;
    align-items: center;
}

.el-menu-item {
    margin: 4px;
    border-radius: 8px;
    height: 50px;
    width: 50px;
    overflow: hidden;
    border: none;
}

.el-menu-item.is-active {
    background-color: hsl(212, 100%, 94%);
    /* border: 2px solid #005eeb; */
    border: none;
}

.el-icon {
    margin: 0 auto;
    text-align: center;
}

.app-logo {
    width: calc(100% - 28px);
    margin: 14px;
    pointer-events: none;
}

html.dark .el-menu {
    --el-menu-bg-color: hsla(0, 0%, 0%, 50%);
    --el-menu-text-color: hsl(0, 0%, 80%);
    --el-menu-hover-text-color: #fff;
    --el-menu-active-color: #00b3ff;
    --el-menu-hover-bg-color: var(--el-color-primary-light-9);
}

html.dark .el-menu-item.is-active {
    background-color: rgba(0, 0, 0, 0.8);
    /* border: 2px solid #297eff; */
}
</style>