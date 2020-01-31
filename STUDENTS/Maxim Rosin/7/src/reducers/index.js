import { combineReducers } from 'redux'
import chatReducer from './chatlist_reducer'
import messageReducer from './messages_reducer'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers ({ router: connectRouter(history), chatReducer, messageReducer })