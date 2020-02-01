import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/message_actions';
import { ADD_CHAT } from "../actions/chat_actions";// тут явно должно быть другое, типа GET_MESSAGE

const initialStore = {
    messages: { 
        // 1: {text: 'Lol i am robo', sender: 'bot'},
        // 2: {text: 'Lol i am robo', sender: 'bot'},
        // 3: {text: 'Lol i am robo', sender: 'bot'}
     }
}


export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        default:
            return store;
    }
}