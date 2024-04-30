import { defineMock } from 'vite-plugin-mock-dev-server'
import { terminals } from './terminals.mock'

export default defineMock({
    url: '/api/terminalView/:id',
    body: (query) => terminals[query.params.id]
})