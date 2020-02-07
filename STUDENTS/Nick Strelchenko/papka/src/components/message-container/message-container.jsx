import React from 'react'
import Footer from '../footer'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Messages from '../messages'
import {Route} from'react-router-dom'
import { connect } from 'react-redux';

import ChooseChat from '../choose-chat'


class MessageContainer extends React.Component{
    render(){
        return(
            <Row className="col-md-12 col-lg-9 ">
                <Col md={12} className="h-90">
                    {Object.keys(this.props.state.messagesReducer.chats).length>=1 && this.props.state.messagesReducer.deleted!==true &&
                        <Route path="/chats/:chatId" render={(props)=><Messages  {...props}/>}/>    
                    }
                    {this.props.state.messagesReducer.deleted===true &&
                        <div className="messageslist mt-1 p-1">
                        <div  className="d-flex flex-row justify-content-center mt-2">
                            <div className="col-6 bg-danger text-white message">
                                <h2 className="text-center">Вы удалили чаты, добавьте новый</h2>
                            </div>
                         </div>
                        </div>  
                    }
                <Route path="/chats/:chatId" render={(props)=><Footer {...props}/>}/>
                <Route path='/'component={ChooseChat} exact/>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps=(state)=>{
    return ({state})
}
export default connect(mapStateToProps)(MessageContainer) 