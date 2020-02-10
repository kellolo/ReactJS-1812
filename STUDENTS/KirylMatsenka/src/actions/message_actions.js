import { RSAA, getJSON } from 'redux-api-middleware'

export let SEND_MESSAGE = '@@message/SEND_MESSAGE'

export let sendMessage = (message, user, chat) => ({
    type: SEND_MESSAGE,
    message, user, chat   
})

export let START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING'
export let SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING'
export let ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING'

export let loadMessages = (chat) => ({
    [RSAA]: {
        endpoint: '/api/messages.json',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => {
                    return getJSON (res).then (json => json) 
                },
                meta: { chat: chat }
            },
            ERROR_MESSAGES_LOADING,
        ],
    }
})