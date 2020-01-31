// methods
import update from 'react-addons-update'

//actions
import {SEND_MESSAGE, SUCCESS_MESSAGES_LOADING} from '../actions/message_actions.js'
import {ADD_CHAT} from '../actions/chat_actions.js'

let initialStore = {
    chats: {},
    isLoading: true,
}

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: {$merge: {[action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                }}},
            })
        }
        case SUCCESS_MESSAGES_LOADING: {
            let chats = {...store.chats}
            action.payload.forEach(msg => {
                let {id, chatId} = msg
                chats[chatId].messageList.push(id)
            })
            return update(store, {
                chats: {$set: chats},
                isLoading: {$set: false},
            })
        }
        case ADD_CHAT: {
            // super reducer logic
            let chatId = Object.keys(store.chats).length + 1
            return update (store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messageList: []
                        }
                    }
                }
            })
        }
        default: {
            return store
        }
    }
}
