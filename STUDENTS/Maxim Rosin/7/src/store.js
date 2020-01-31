import initReducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

export const history = createBrowserHistory()

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messages_reducer', 'chatist_reducer'],
 };

//midware
import middlewares from './middleware'
import { func } from 'prop-types'

function initStore() {
    const innitialStore = {};
    const newPersistedReducer = persistReducer(persistConfig, initReducers(history))

    const store = createStore(
        newPersistedReducer,
        innitialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );
 
    const persistor = persistStore(store);
 
    return { store, persistor };
 }
 
 export default initStore;
 