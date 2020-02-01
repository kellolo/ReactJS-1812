import update from 'react-addons-update'
import { ADD_CHAT } from '../actions/chat_actions.js'

let initialStore = {
    chats: {},
    user: null
}

// Это наверное не катит никак?
fetch ('https://raw.githubusercontent.com/KirylJazzSax/api/master/users.json')
.then (data => data.json ())
.then (user => initialStore.chats.user = user) 


export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let id = Object.keys (store.chats).length + 1
            return update (store, {
                chats: {
                    $merge: {
                        [id]: {
                            title: `Chat ${id}`,
                        }
                    }
                }
            })
        }
        default: { 
            return store
        }
    }
}