import React from 'react';
import MessageTable from '../message-table'
import './app.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import {Route,Redirect} from'react-router-dom'
import initStore from '../../utils/store'
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../../utils/store'
import {Provider} from 'react-redux'


const store = initStore();

function App() {
  return (   
      <div className="App" style={{height:"100%"}}>
        <Provider store={store}>
          <ConnectedRouter history={history}>  
          <Container fluid="true" style={{height:"100%"}} className="">
            <Row style={{height:"100%"}} className="justify-content-center align-items-center">
              <Col className="m-auto" style={{height:"80%"}} md={12} lg={10}>
                <MessageTable style={{height:"100%"}}/>
              </Col>
            </Row>
          </Container> 
          
          </ConnectedRouter>
        </Provider>   
      </div>
    
  );
}

export default App;