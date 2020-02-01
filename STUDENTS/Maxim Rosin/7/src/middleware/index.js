import messageMiddleware from './message_middleware.js'
import { apiMiddleware } from 'redux-api-middleware';

export default [
    apiMiddleware,
    messageMiddleware
]