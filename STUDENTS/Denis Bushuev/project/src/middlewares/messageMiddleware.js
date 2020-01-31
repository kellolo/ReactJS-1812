import { SEND_MESSAGE } from '../actions/messageActions.js';

export default store => next => (action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            if(action.sender === 'user') {
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1, 'Не приставай ко мне, Я робот!!!', 'bot', action.chatId)), 1000);
                console.log('Hello');
            };
    };
    return next(action);
};