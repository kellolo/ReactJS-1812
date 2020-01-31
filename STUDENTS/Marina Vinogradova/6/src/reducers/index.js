import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatlist_reducer'
import messageReducer from './messages_reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    chatReducer,
    messageReducer,
 });