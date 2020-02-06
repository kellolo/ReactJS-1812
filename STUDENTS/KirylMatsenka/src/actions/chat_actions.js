import { RSAA, getJSON } from 'redux-api-middleware'

export let ADD_CHAT = '@@chat/ADD_CHAT'

export let addChat = () => ({
    type: ADD_CHAT,
    id: Date.now ()
})

export let START_CHATS_LOADING = '@@chat/START_CHATS_LOADING'
export let SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING'
export let ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING'

export let loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => {
                    console.log (res)
                    return getJSON (res).then (json => json) 
                },
            },
            ERROR_CHATS_LOADING
        ],
    }
})