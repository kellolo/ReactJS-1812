import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@material-ui/core/Box'
import './styles/styles.css'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './components/router.jsx'

import initStore, { history } from './store.js'
import { Provider } from 'react-redux'

const { store, persistor } = initStore ()

ReactDom.render (
    <Provider store = { store }>
        <PersistGate loading = { null } persistor = { persistor }>
            <ConnectedRouter history = { history }>
                <Box height={'100vh'}>
                    <Router />
                </Box>
            </ConnectedRouter>
        </PersistGate>
     </Provider>, 
    document.querySelector ('#app')
)
