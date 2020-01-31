import {RSAA, getJSON} from 'redux-api-middleware'
import {normalize} from 'normalizr'
import {chats} from '../utils/schemas.js'

export let ADD_CHAT = '@@chat/ADD_CHAT'

export let addChat = (title) => ({
    type: ADD_CHAT,
    title,
})

export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING'
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING'

export let loadChats = () => ({
    [RSAA]: {
        endpoint: '/API/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => normalize(json, [chats]),
                ),
            },
            ERROR_CHATS_LOADING,
        ],
    },
})