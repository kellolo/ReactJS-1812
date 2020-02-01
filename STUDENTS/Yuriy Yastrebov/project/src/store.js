import {createStore, applyMiddleware, compose} from 'redux'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import initReducers from './reducers/index.js'

// midware
import middlewares from './middleware/index.js'

let persistConfig = {
    key: 'geekmessenger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer', 'chatReducer'],
}

export let history = createBrowserHistory()

export default function initStore () {
    let initialStore = {}
    let store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        initialStore,
        compose(applyMiddleware(routerMiddleware(history), ...middlewares))
    )
    let persistor = persistStore(store)

    return {store, persistor}   
}