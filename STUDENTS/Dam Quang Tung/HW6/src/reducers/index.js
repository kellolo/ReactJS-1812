import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatlist_reducer'
import messagesReducer from './messages_reducer'

export default (history) => combineReducers({ chatReducer, messagesReducer })