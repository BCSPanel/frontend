import axios from 'axios'

export interface Terminal {
    id: number
    name: string
    description: string
    statu: number
    startTime: number
}

export async function getAllTerminals() {
    return (await axios.get('./api/terminals')).data
}

export async function getTerminalStatu(id: number|string) {
    return (await axios.get('./api/terminalView/' + id)).data
}
