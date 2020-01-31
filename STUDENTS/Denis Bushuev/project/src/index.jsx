import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router.jsx';
import './style/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import initStore, { history } from './utils/store.js';

const { store, persistor } = initStore();

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={ history }>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);