<script setup lang="ts">
</script>

<template>
    <el-col>
        <el-result icon="error" title="404 Not Found" sub-title="">
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">
                    <span>Index</span>
                </el-button>
            </template>
        </el-result>
    </el-col>
</template>
