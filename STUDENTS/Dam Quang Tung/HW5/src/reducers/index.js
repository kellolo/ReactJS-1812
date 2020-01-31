import { combineReducers } from 'redux'
import chatReducer from './chatlist_reducer'
import messagesReducer from './messages_reducer'

export default combineReducers({ chatReducer, messagesReducer })