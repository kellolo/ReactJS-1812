import { SEND_MESSAGE, sendMessage } from '../actions/messages_actions'
import { animateChanel } from '../actions/animation_actions'
 
let robotAnswerArr = ['Как дела?', 'Добрый день. Чем могу помочь?', 'Рад помочь!', 'Хорошего дня!', 'Что делаешь?']

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.sender == 'It') {
                store.dispatch(animateChanel(0))
                let rndIndex = Math.floor((Math.random()*5))
                let Answer = robotAnswerArr[rndIndex]
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                 Answer, 'bot', action.chatId)), 1000)
            }
            if (action.sender == 'bot') {
                store.dispatch(animateChanel(action.chatId))
            }
        }
    }
    return next(action)
}