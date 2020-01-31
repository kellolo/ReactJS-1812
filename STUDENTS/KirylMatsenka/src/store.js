import initReducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware }from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import middlewares from './middleware'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    key: 'messanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chatReducer', 'messageReducer']
}

export let history = createBrowserHistory ()

function initStore () {
    let initialStore = {}

    let store = createStore (
        persistReducer(persistConfig, initReducers (history)),
        initialStore,
        applyMiddleware (routerMiddleware(history), ...middlewares)
        )
        let persistor = persistStore (store)

        return { store, persistor}
}

export default initStore