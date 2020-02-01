import initReducers from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import middlewares from './middlewares';

export const history = createBrowserHistory()

function initStore () {
    let initialStore = {}
    
    return createStore (
        initReducers(history),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );
}

export default initStore;