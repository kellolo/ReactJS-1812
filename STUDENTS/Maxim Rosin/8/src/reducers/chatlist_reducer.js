//methods
import update from 'react-addons-update'

//actions
import { ADD_CHAT } from '../actions/chat_actions.js'
import { SEND_MESSAGE } from '../actions/message_actions.js'

let initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: []},
        2: {title: 'Чат 2', messageList: []},
        3: {title: 'Чат 3', messageList: []},
    }
}

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            //super reducer logic
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
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            })
        }
         
        default: {
            return store
        }
    }
}