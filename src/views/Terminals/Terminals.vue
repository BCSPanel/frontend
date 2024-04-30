<script setup lang="ts">
import {
	Plus as IconPlus,
} from '@element-plus/icons-vue'
import {
	Search as IconSearch,
} from '@vicons/ionicons5'


import { ref, watch } from 'vue';
import { getAllTerminals, type Terminal } from '@/net/terminals';
import { formatTime } from '@/components/dateformat';
import { RouterLink } from 'vue-router';
// import { ElMessage } from 'element-plus';

const inputSearch = ref('')
const terminals = ref<Terminal[]>([]);
const defaultCardWidth = 300
const cardWidth = ref(defaultCardWidth)
const terminalsRow = ref()
const loadingTerminalsRow = ref(true)

// function toView(id:number){
// 	router.push('')
// }

function onresize() {
	const tr = terminalsRow.value as HTMLDivElement
	if (!tr) return;
	const elMain = document.getElementById('el-main') as HTMLDivElement
	elMain.style.overflowY = 'hidden'
	const ow = tr.offsetWidth + 10;
	elMain.style.overflowY = ''
	cardWidth.value = (ow / Math.floor(ow / (defaultCardWidth + 10))) - 10
}
watch(terminals, onresize, { deep: true });
window.addEventListener('resize', onresize);

async function getAndDisplayTerminals() {
	loadingTerminalsRow.value = true
	try {
		const allTerminals = await getAllTerminals()
		terminals.value = allTerminals.terminals
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
	<!-- <el-row :gutter="10">
		<el-col :span="6" v-for="i in terminals">
			<el-card class="card"></el-card>
		</el-col>
	</el-row> -->
	<div class="terminalsRow" ref="terminalsRow" :style="'--card-width:' + cardWidth" v-loading="loadingTerminalsRow">
		<div class="terminalsCol" v-for="i in terminals" :key="i.id">
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
		</div>
	</div>
</template>

<style scoped>
.el-card {
	margin: 0 0 10px 0;
}

.terminalsRow {
	/* width: 100%; */
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	position: relative;
	box-sizing: border-box;
	/* margin-left: -5px; */
	/* margin-right: -5px; */
	gap: 10px;
	min-height: 136px;
}

.terminalsCol {
	/* padding: 0 5px; */
	width: 100%;
	max-width: var(--card-width);
}

.el-card.card {
	font-size: 14px;
	margin: 0;
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