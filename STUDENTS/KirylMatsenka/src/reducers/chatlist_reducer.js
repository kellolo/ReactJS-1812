import update from 'react-addons-update'
import {
    ADD_CHAT,
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING
} from '../actions/chat_actions.js'

let initialStore = {
    chats: {},
    user: { id: 1, name: "Вася" }
}

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return update (store, {
                chats: {
                    $merge: {
                        [action.id]: {
                            title: `Chat ${action.id}`,
                        }
                    }
                }
            })
        }
        case SUCCESS_CHATS_LOADING: {
            return update (store, {
                chats: {
                    $set: { ...action.payload, ...store.chats }
                }
            }) 
        }
        default: { 
            return store
        }
    }
}