import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
    url: '/ok',
    body: 'ok\n',
    type: 'text/plain',
})
