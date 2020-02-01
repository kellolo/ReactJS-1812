import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router'
import Router from './components/Router.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux
import initStore, { history } from './store.js'
import { Provider } from 'react-redux';

ReactDOM.render(
   <Provider store = { initStore () }>
      <ConnectedRouter history={history}>
         <MuiThemeProvider>
            <Router />
         </MuiThemeProvider>
      </ConnectedRouter>
   </Provider>
   , document.getElementById('root'),
);