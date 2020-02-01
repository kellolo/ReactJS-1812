import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatlist_reducer.js'
import messageReducer from './messages_reducer.js'

export default history => combineReducers ({
    router: connectRouter (history), 
    chatReducer,
    messageReducer
 })