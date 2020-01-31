//methods
import update from 'react-addons-update'

//actions
import { ADD_CHANEL } from '../actions/chanel_actions'
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from '../actions/messages_actions.js'

let initialStore = {
    chanels: { 
        1: {title: 'Top Coding', descr: 'New coding tasks!', messageList: []},
        2: {title: 'Cooking', descr: 'Best recepies!', messageList: []},
        3: {title: 'WebDev', descr: 'Web Development', messageList: []}
    }
}

export default function chanelsReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHANEL: {
            //super reducer logic
            let chanelId = Object.keys(store.chanels).length + 1
            return update (store, {
                chanels: {
                    $merge: {
                        [chanelId]: {
                            title: action.title,
                            descr: action.descr,
                            messageList: []
                        }
                    }
                }
            })
        }
        case SEND_MESSAGE: {
            return update(store, {
                chanels: { $merge: { [action.chatId]: {
                    title: store.chanels[action.chatId].title,
                    descr: store.chanels[action.chatId].descr,
                    messageList: [...store.chanels[action.chatId].messageList, action.messageId]
                } } },
            })
        }
        case SUCCESS_MESSAGES_LOADING: {
            let chanels = {...store.chanels}
            action.payload.forEach(msg => {
                let { id, chatId } = msg;
                chanels[chatId].messageList.push(id);
            })
            return update(store, {
                chanels: { $set: chanels },
                isLoading: { $set: false },
            })
        }
        default: {
            return store
        }
    }
}