import {SEND_MESSAGE} from '../actions/message_actions.js'

function getRndAnswer() {
    let robotAnswersArr = ['Можете повторить?', 'Не расслышал', 'Ага, хорошая погода', 'Думаю, что это так', 'Давай поболтаем']
    return (robotAnswersArr[Math.floor(Math.random() * robotAnswersArr.length)])
}

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'it') {
                let msgId = Object.keys(store.getState().messageReducer.messages).length + 1
                setTimeout(() => store.dispatch(sendMessage(msgId, 'Не приставай ко мне, Я робот!!!', 'bot', action.chatId))
                , 1000)
            }
        }
        return next(action)
    }