//methods
import update from 'react-addons-update'
//import { createStore } from 'redux'

//actions
import { ADD_CHAT } from '../actions/chat_actions.js'
import { SEND_MESSAGE } from '../actions/message_actions.js'

let initialStore = {
  chats: {
    1: {
      title: 'Mary',
      messagesList: [
        { body: 'Hello! How are you?', author: "Mary", messageId: 1 },
        { body: 'Hi! Fine! And you?', author: "You", messageId: 2 },
        { body: 'Fine! What is your plan for this weekend?', author: "Mary", messageId: 3 },
      ]
    },
    2: {
      title: 'Alex',
      messagesList: [
        { body: 'Hello!', author: "Alex", messageId: 1 },
        { body: 'Hi! ', author: "You", messageId: 2 }
      ]
    },
    3: {
      title: 'Bill',
      messagesList: [
        { body: 'Time to pay!', author: "Bill", messageId: 1 }
      ]
    },
    4: {
      title: 'Steave',
      messagesList: [
        { body: 'Help me, please!', author: "Steave", messageId: 1 }
      ]
    },
    5: {
      title: 'Ealon',
      messagesList: [
        { body: 'Hi!', author: "Ealon", messageId: 1 },
        { body: 'Hi!', author: "You", messageId: 2 },
        { body: 'Drive Tesla!', author: "Ealon", messageId: 3 }
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