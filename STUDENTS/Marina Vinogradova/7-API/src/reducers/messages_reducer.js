import update from 'react-addons-update';
import {
    SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
} from '../actions/message_actions';
import { ADD_CHAT } from "../actions/chat_actions";// тут явно должно быть другое, типа GET_MESSAGE

const initialStore = {
    messages: { 
        // 1: {text: 'Lol i am robo', sender: 'bot'},
        // 2: {text: 'Lol i am robo', sender: 'bot'},
        // 3: {text: 'Lol i am robo', sender: 'bot'}
     },
     isLoading: false,
}


export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            action.payload.forEach(msg => {
                const { id, chatId } = msg;
                chats[chatId].messageList.push(id);
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false },
            });
        }
 
        default:
            return store;
    }
}