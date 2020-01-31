import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import ChatList from './components/ChatList/ChatList.jsx'
import MessageField from './components/MessageField/MessageField.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Layout from './components/Layout/Layout.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Router from './components/Router.jsx';
ReactDOM.render (
    <BrowserRouter>
      <MuiThemeProvider>
         <Router />
      </MuiThemeProvider>
   </BrowserRouter>
   , document.getElementById('root'),
)