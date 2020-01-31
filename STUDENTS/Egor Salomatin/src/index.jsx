import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router.jsx'
import { ConnectedRouter } from 'connected-react-router'
import initStore, { history } from './store.js'
import { Provider } from 'react-redux';

//persist
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = initStore();

ReactDOM.render (
      <Provider store = { store }>
            <PersistGate loading={null} persistor={persistor}>
                  <ConnectedRouter history={history}>
                        <CssBaseline/>
                        <Router />
                  </ConnectedRouter>
            </PersistGate>
      </Provider>
   , document.getElementById('root'),
)
