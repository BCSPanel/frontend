<script lang="ts" setup>
import {
    Menu as IconMenu,
    House as IconHouse,
    FolderOpened as IconFolderOpened,
    Avatar as IconAvatar,
    Setting as IconSetting,
} from '@element-plus/icons-vue'

import {
    LogOutOutline as IconLogOutOutline
} from '@vicons/ionicons5'

import logout from './net/logout'
import { icons as iconImgs } from '@/components/icons'
// import isMobile from '@/components/isMobile'

// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route)

</script>

<template>
    <el-menu router :default-active="/^\/\w*/.exec($route.path)?.toString()">
        <img :src="iconImgs.BCSPanel" alt="" class="app-logo">
        <div>
            <el-menu-item index="/">
                <el-icon><icon-house /></el-icon>
                <span>{{ $t('menu.Index') }}</span>
            </el-menu-item>
            <el-menu-item index="/terminals">
                <el-icon><icon-menu /></el-icon>
                <span>{{ $t('menu.Terminals') }}</span>
            </el-menu-item>
            <el-menu-item index="/files">
                <el-icon><icon-folder-opened /></el-icon>
                <span>{{ $t('menu.Files') }}</span>
            </el-menu-item>
            <el-menu-item index="/users">
                <el-icon><icon-avatar /></el-icon>
                <span>{{ $t('menu.Users') }}</span>
            </el-menu-item>
            <el-menu-item index="/settings">
                <el-icon><icon-setting /></el-icon>
                <span>{{ $t('menu.Settings') }}</span>
            </el-menu-item>
        </div>
        <el-popconfirm @confirm="logout" :title="$t('popconfirm.logout.title')" :confirm-button-text="$t('popconfirm.logout.yes')"
            :cancel-button-text="$t('popconfirm.logout.no')">
            <template #reference>
                <el-menu-item>
                    <el-icon>
                        <IconLogOutOutline />
                    </el-icon>
                    <span>{{ $t('menu.LogOut') }}</span>
                </el-menu-item>
            </template>
        </el-popconfirm>
    </el-menu>
</template>

<style scoped>
.el-menu {
    height: 100%;
    transition: var(--el-transition-duration);
    --el-menu-bg-color: hsl(210, 100%, 100%, 93%);
    --el-menu-text-color: hsl(0, 0%, 39%);
    --el-menu-hover-text-color: hsl(0, 0%, 39%);
    --el-menu-active-color: hsl(212, 100%, 50%);
    --el-menu-hover-bg-color: hsl(212, 100%, 96%);
    --el-menu-base-level-padding: 12px;
}

.el-menu-item {
    margin: 4px;
    border-radius: 8px;
    height: 50px;
    overflow: hidden;
}

.el-menu-item.is-active {
    background-color: hsl(212, 100%, 94%);
    /* border: 2px solid #005eeb; */
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