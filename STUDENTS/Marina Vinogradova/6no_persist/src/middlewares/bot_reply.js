
// import { SEND_MESSAGE, sendMessage } from '../actions/message_actions.js'

// export default store => next => (action) => {
//     switch (action.type) {
//         case SEND_MESSAGE:
//             if (store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length < 4))) {
//                 return "Ваш звонок важен для нас"
//             } else {
//             let botReplyArr = ["Ты?", "Давай попозже", "О, божечки! О, кошечки!", "Няшка"]
//             let finBotReply = Math.floor(Math.random() * botReplyArr.length)
//             return (botReplyArr[finBotReply])
//     }
//     return next(action)
//  }
