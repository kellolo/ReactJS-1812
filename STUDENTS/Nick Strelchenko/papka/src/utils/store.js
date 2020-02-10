import initReducers from '../reducers'
import { createStore,applyMiddleware,compose  } from 'redux';
import middlewares from '../middlewares'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory(basename="/chat_pwa/")

export default function initStore(){
    
    const store = createStore(
        initReducers(history),
        compose(
            applyMiddleware(routerMiddleware(history),...middlewares)
        ) 
    )
    return store      
}



