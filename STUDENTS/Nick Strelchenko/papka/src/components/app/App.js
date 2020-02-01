import React from 'react';
import {BrowserRouter,Route,Redirect} from'react-router-dom'
import './App.css';
import Header from '../header'
import MessageField from '../massage-field'
import 'bootstrap/dist/css/bootstrap.min.css';
import initStore from '../../utils/store'
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../../utils/store'
import {Provider} from 'react-redux'
import Container from 'react-bootstrap/Container'


import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = initStore();

function App(props) {
  
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={ null } persistor={ persistor }>
        <ConnectedRouter history={history}>
          <Container className="bg-light m-auto"style={{height:"800px"}}>
            <Header />
            <Route path="/chat/:chatId" render={(props)=><MessageField  {...props}/>}/>
            <Redirect from="/" to="/chat/1" />
            
          </Container>
        </ConnectedRouter>
        </PersistGate>
      </Provider>
      
    </div>
  );
}

export default App;
