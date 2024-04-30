import { defineMock } from 'vite-plugin-mock-dev-server'

export const terminals = [
    {
        "id": 0,
        "statu": 1,
        "name": "bash",
        "startTime": Date.now(),
        "description": "bash description"
    },
    {
        "id": 1,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 description"
    },
    {
        "id": 2,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 description"
    },
    {
        "id": 3,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 description"
    },
    {
        "id": 4,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 description"
    },
    {
        "id": 5,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 description"
    },
    {
        "id": 6,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 description"
    },
    {
        "id": 7,
        "statu": 0,
        "name": "fabric-1.19.2",
        "startTime": Date.now(),
        "description": "fabric-1.19.2 descriptionfabric-1.19.2 descriptionfabric-1.19.2 descriptionfabric-1.19.2 descriptionfabric-1.19.2 descriptionfabric-1.19.2 description"
    }
]

export default defineMock({
    url: '/api/terminals',
    body: {
        "terminals": terminals
    }
})