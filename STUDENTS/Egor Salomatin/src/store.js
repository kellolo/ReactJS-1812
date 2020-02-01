import initReducers from './reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'

//persist
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [],
 }

export const history = createBrowserHistory()

//midware
import middlewares from './middlewares'
export default function initStore () {
    let initialStore = {}
  
    const store = createStore (
        persistReducer(persistConfig, initReducers(history)),
        initialStore,
        applyMiddleware(routerMiddleware(history),...middlewares),
    )

    const persistor = persistStore(store)

    return {store, persistor}
}