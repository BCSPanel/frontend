import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
    url: '/api-login/logout',
    status: 303,
    headers: {
        location: '/'
    }
})
