<script setup lang="ts">
import {
	Plus as IconPlus,
} from '@element-plus/icons-vue'
import {
	Search as IconSearch,
} from '@vicons/ionicons5'


import { ref } from 'vue';
import { getAllTerminals, type Terminal } from '@/net/terminals';
import { formatTime } from '@/components/dateformat';
import { RouterLink } from 'vue-router';
// import { ElMessage } from 'element-plus';

const inputSearch = ref('')
const terminals = ref<Terminal[]>([]);
const loadingTerminalsRow = ref(true)

async function getAndDisplayTerminals() {
	loadingTerminalsRow.value = true
	try {
		const allTerminals = await getAllTerminals()
		terminals.value = allTerminals
	} catch (e) {
		ElMessage({
			showClose: true,
			message: String(e),
			type: 'error',
			duration: 0,
		})
	}
	loadingTerminalsRow.value = false
}
getAndDisplayTerminals()

</script>

<template>
	<el-card>
		<el-button type="info" style="margin-right: 16px;">
			<el-icon><icon-plus /></el-icon>
			<span>New</span>
		</el-button>
		<el-input v-model="inputSearch" style="width: 240px" placeholder="Search" />
		<el-button type="primary">
			<el-icon><icon-search /></el-icon>
		</el-button>
	</el-card>
	<el-row :gutter="10" class="terminalsRow" v-loading="loadingTerminalsRow">
		<el-col :span="6" class="terminalsCol" v-for="i in terminals" :key="i.id">
			<router-link :to="{
				name: 'terminalsView',
				params: { id: i.id }
			}" class="router-link">
				<el-card class="card">
					<div class="card-header">
						<div class="name">{{ i.name }}</div>
						<div class="description">{{ i.description }}</div>
					</div>
					<span class="startTime">StartTime: {{ formatTime(new Date(i.startTime), false) }}</span><br>
					<span class="statu">Status: {{ i.statu }}</span><br>
				</el-card>
			</router-link>
		</el-col>
	</el-row>
</template>

<style scoped>
.el-card {
	margin: 0 0 10px 0;
}

.terminalsRow {
	min-height: 147px;
}

.terminalsCol {}

.el-card.card {
	font-size: 14px;
	overflow: hidden;
	white-space: nowrap;
}

.el-card.card .card-header {}

.el-card.card .name {
	font-size: 18px;
	margin-bottom: 2px;
}

.el-card.card .description {
	color: gray;
	margin-bottom: 16px;
}

.el-card.card .startTime {}

.router-link {
	text-decoration: none;
}
</style>