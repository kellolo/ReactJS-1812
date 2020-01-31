import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux
import initStore from './store.js'
import { Provider } from 'react-redux';

ReactDOM.render(
   <Provider store = { initStore () }>
      <BrowserRouter>
         <MuiThemeProvider>
            <Router />
         </MuiThemeProvider>
      </BrowserRouter>
   </Provider>
   , document.getElementById('root'),
);