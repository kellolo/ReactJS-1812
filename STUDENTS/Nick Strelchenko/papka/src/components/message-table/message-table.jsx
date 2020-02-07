import React from 'react'
import Header from '../header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {startLoad} from '../../actions/messages'
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { push } from 'connected-react-router';

import ChatList from '../chat-list'
import MessageContainer from '../message-container'
class MessageTable extends React.Component{
    componentDidMount(){
        this.props.startLoad()
    }
    render(){
        return(
            <div className="h-100">
                <Header/>
                <Row className="h-100">                 
                    <ChatList/>
                    <MessageContainer/>
                </Row>
            </div>
                  
        )
    }
}

const mapStateToProps=(state)=>{
    return ({state})
}

const mapDispatchToProps = dispatch => bindActionCreators({push,startLoad},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(MessageTable) 


            