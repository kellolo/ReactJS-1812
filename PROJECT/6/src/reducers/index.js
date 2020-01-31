import { combineReducers } from 'redux'
import chatReducer from './chatlist_reducer'
import messageReducer from './messages_reducer'

export default combineReducers ({ chatReducer, messageReducer })