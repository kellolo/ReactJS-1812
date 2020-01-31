import { SEND_MESSAGE, sendMessage } from '../actions/message_actions.js'




export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'it') {
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                'Уважаемый, слушаю вас внимательно', 'bot', action.chatId)), 1000)
            }
    }
    return next(action)
 }
