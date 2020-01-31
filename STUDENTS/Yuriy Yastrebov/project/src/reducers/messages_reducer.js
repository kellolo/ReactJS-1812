import update from 'react-addons-update'
import {SEND_MESSAGE} from '../actions/message_actions.js'
import {    
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
    } from '../actions/chat_actions.js'

const initialStore = {
    messages: {},
     isLoading: false,
}   

export default function messageReducer (store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: {$merge: {[action.messageId]: {text: action.text, sender: action.sender}}},
            })
        }
        case START_CHATS_LOADING: {
            return update(store, {
                isLoading: {$set: true},
            })
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                messages: {$set: action.payload.entities.messages},
            })
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: {$set: false},
            })
        }
        default:
            return store
    }
}