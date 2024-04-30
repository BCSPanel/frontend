<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(10)

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]
</script>

<template>
    <el-card>
        <el-progress type="dashboard" :percentage="percentage" :color="colors" />
    </el-card>
</template>

<style scoped>
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
}

.demo-progress .el-progress--circle {
    margin-right: 15px;
}
</style>
