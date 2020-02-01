import { SEND_MESSAGE, sendMessage } from '../actions/message_actions.js'
import Robot from '../components/Robot/Robot.js'

let rob = new Robot ()

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.user === store.getState ().chatReducer.user.name) {
                setTimeout (() => {
                    store.dispatch (
                        sendMessage (
                            rob.answer(
                                store.getState ().chatReducer.chats[action.chat].messages).body, rob.name, action.chat))
                }, 2000)
            }
    }
    return next (action)
}