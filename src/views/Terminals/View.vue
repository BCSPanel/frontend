<script lang="ts" setup>
import { getTerminalStatu, type Terminal } from '@/net/terminals';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from 'xterm-addon-fit'
import '@xterm/xterm/css/xterm.css'
import {
    RefreshRight as IconRefreshRight,
    VideoPlay as IconVideoPlay,
    SwitchButton as IconSwitchButton,
    CloseBold as IconCloseBold,
} from '@element-plus/icons-vue'

const terminalDiv = ref()

const route = useRoute()

const terminalStatu = ref<Terminal>()
terminalStatu.value = await getTerminalStatu(route.params.id as string)
// console.log(terminalStatu);

onMounted(() => {
    const term = new XTerm({
        //   是否禁用输入
        disableStdin: false,
        cursorStyle: 'bar',
        //   启用时光标将设置为下一行的开头
        // convertEol: true,
        // 终端中的回滚量
        scrollback: 10,
        fontSize: 14,
        rows: 20,
        // 光标闪烁
        cursorBlink: true,
        theme: {
            //   字体
            foreground: '#ffffff',
            background: '#000000',
            // 光标
            cursor: 'help',
        },
    })
    // console.log(terminalDiv.value as HTMLDivElement)
    term.open(terminalDiv.value as HTMLDivElement)
    let fitAddon = new FitAddon()
    term.loadAddon(fitAddon)
    fitAddon.fit()
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
})

</script>

<template>
    <el-card>
        <div class="titleBoxDiv">
            <div class="titlePDiv">
                <p class="titleP">{{ terminalStatu?.name }}</p>
                <p class="description">{{ terminalStatu?.description }}</p>
            </div>
            <div class="titleButtons">
                <el-button type="success">
                    <el-icon>
                        <IconVideoPlay />
                    </el-icon>
                    <span>Start</span>
                </el-button>
                <el-button type="info">
                    <el-icon>
                        <IconSwitchButton />
                    </el-icon>
                    <span>Stop</span>
                </el-button>
                <el-button type="warning">
                    <el-icon>
                        <IconRefreshRight />
                    </el-icon>
                    <span>ReStart</span>
                </el-button>
                <el-button type="danger">
                    <el-icon>
                        <IconCloseBold />
                    </el-icon>
                    <span>ForceStop</span>
                </el-button>
            </div>
        </div>
        <div ref="terminalDiv" class="terminalDiv"></div>
    </el-card>
</template>

<style scoped>
.titleBoxDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}

.titlePDiv {
    /* display: flex; */
    flex-wrap: wrap;
    align-items: center;
}

.titleP {
    font-size: 18px;
    margin: 0;
}

.description {
    color: gray;
    font-size: 14px;
    margin: 0;
}

.titleButtons {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-bottom: -8px;
}

.terminalDiv {
    background-color: black;
    /* display:flex; */
    margin: 18px 0;
    overflow: hidden;
    border-radius: 6px;
    padding: 2px;
}

.el-button {
    margin: 0 0 8px 8px;
    /* padding: 8px 10px; */
}
</style>