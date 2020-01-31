//methods
import update from 'react-addons-update'
//import { createStore } from 'redux'

//actions
import { ADD_CHAT } from '../actions/chat_actions.js'
import { SEND_MESSAGE } from '../actions/message_actions.js'

let initialStore = {
  chats: {
    1: {
      title: '1',
      messagesList: [
        { body: 'Hello! How are you?', author: "1", messageId: 1 },
        { body: 'Hi! Fine! And you?', author: "You", messageId: 2 },
        { body: 'Fine! What is your plan for this weekend?', author: "1", messageId: 3 },
      ]
    },
    2: {
      title: '2',
      messagesList: [
        { body: 'Hello!', author: "2", messageId: 1 },
        { body: 'Hi! ', author: "You", messageId: 2 }
      ]
    },
    3: {
      title: '3',
      messagesList: [
        { body: 'GG!', author: "3", messageId: 1 }
      ]
    },
    4: {
      title: '4',
      messagesList: [
        { body: 'Help me, please!', author: "4", messageId: 1 }
      ]
    },
    5: {
      title: '5',
      messagesList: [
        { body: 'Hi!', author: "5", messageId: 1 },
        { body: 'Hi!', author: "You", messageId: 2 },
        { body: 'Wassup', author: "5", messageId: 3 }
      ]
    }
  }
}

// const init = (currentState = initialStore, action) => {
//   return currentState
// }

// const store = createStore(init)

//console.log(store)

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT:
      {
        //super reducer logic
        let chatId = Object.keys(store.chats).length + 1
        return update(store, {
          chats: {
            $merge: {
              [chatId]: {
                title: action.title,
                messageList: []
              }
            }
          }
        })
      }
    default:
      {
        return store
      }
  }
}