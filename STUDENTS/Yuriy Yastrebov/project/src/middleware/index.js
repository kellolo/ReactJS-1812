import {apiMiddleware} from 'redux-api-middleware'
import messageMiddleware from './message_middleware.js'

export default [
    apiMiddleware,
    messageMiddleware,
]