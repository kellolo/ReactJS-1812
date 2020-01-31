import { SEND_MESSAGE, sendMessage } from '../actions/message_actions.js'

export default store => next => (action) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  switch (action.type) {
    case SEND_MESSAGE:
      if (action.sender === 'You') {
        let msgArr = store.getState().messagesReducer.roboMessages
        let id = getRandomInt(msgArr.length)
        let elem = document.getElementById(`chat-${ action.chatId }`);
        console.log(action.chatId)
        setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messagesReducer.messages).length + 1,
          msgArr[id].body, msgArr[id].author, action.chatId)), 1000)
        setTimeout(() => elem.className = "light", 1000)
        setTimeout(() => elem.className = null, 3000)
      }
  }
  return next(action)
}