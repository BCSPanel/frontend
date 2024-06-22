export interface Terminal {
    id: number
    name: string
    description: string
    statu: number
    startTime: number
}

export async function getAllTerminals() {
    const resp = await fetch('./api/terminals')
    return await resp.json() as Terminal[]
}

export async function getTerminalStatu(id: number | string) {
    const resp = await fetch('./api/terminalView/' + id)
    return await resp.json() as Terminal
}
