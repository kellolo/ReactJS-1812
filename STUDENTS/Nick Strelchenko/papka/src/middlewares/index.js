import {apiMiddleware} from 'redux-api-middleware'
import loadMessagesMiddleware from './loadMessagesMiddleware'
import robotAnswerMiddleware from './robotAnswerMiddleware'
export default [apiMiddleware,loadMessagesMiddleware,robotAnswerMiddleware]