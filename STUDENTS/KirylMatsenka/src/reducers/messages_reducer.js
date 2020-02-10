import update from 'react-addons-update'
import { 
    SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING 
} from '../actions/message_actions.js'

import { ADD_CHAT } from '../actions/chat_actions.js'

let initialStore = {
    messages: {},
}

export default function messageReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return update (store, {
                messages: {
                    $set: {
                        ...store.messages, [action.id]: {}
                    }
                }
            })
        }
        case SEND_MESSAGE: {
            let id
            if (store.messages[action.chat]) {
                id = Object.keys (store.messages[action.chat]).length + 1
            } else {
                store.messages = {...store.messages, [action.chat]: {}}
            }

            return update (store, {
                messages: {
                    $merge: {
                        [action.chat]: {...store.messages[action.chat], 
                            [id]: {
                                body: action.message,
                                user: action.user
                            }
                        }
                    }
                }
            })
        }
        case SUCCESS_MESSAGES_LOADING: {
            return update (store, {
                messages: {  
                    $set: {
                        ...action.payload, ...store.messages
                    }
                }
            })
        }
        default: {
            return store
        }    
    }
} 