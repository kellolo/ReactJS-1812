import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import initReducers from './reducers'
//midware
import middlewares from './middleware'

export let history = createBrowserHistory()

function initStore() {
  let initialStore = {}

  return createStore(
  	initReducers(history),
    initialStore,
    compose(
           applyMiddleware(routerMiddleware(history), ...middlewares),
           window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
       )
    )
}

export default initStore;