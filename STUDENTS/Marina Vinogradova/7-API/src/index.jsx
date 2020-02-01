import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.jsx'

//redux
import initStore, { history } from './store.js'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = initStore();

ReactDOM.render(
   <Provider store = { initStore() }>
     {/* <PersistGate loading={null} persistor={persistor}>       */}
      <ConnectedRouter history={history}>
            <MuiThemeProvider>
               <Router />
            </MuiThemeProvider>
         </ConnectedRouter>
      {/* </PersistGate> */}
   </Provider>
   , document.getElementById('root'),
);

