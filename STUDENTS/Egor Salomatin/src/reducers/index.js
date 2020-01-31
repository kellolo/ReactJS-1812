import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chanelsReducer from './chanels_reducer'
import messageReducer from './messages_reducer'
import animationReducer from './animation_reducer'

export default ( history ) => combineReducers({
    router: connectRouter(history),
    chanelsReducer, messageReducer, animationReducer
})