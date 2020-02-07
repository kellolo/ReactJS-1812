import {sendMessage,SEND_MESSAGE} from '../actions/sendMessage'


export default store => next => (action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'User') {
               setTimeout(() => store.dispatch(sendMessage(action.id,
                        'Не приставай ко мне, я робот!', 'Robot')), 1000) 
            }
    }
    return next(action)
}