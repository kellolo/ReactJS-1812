import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import {sendMessage} from '../../actions/sendMessage'
import {clear} from '../../actions/clear'

class Footer extends React.Component{
    state={
        text:""
    }
    render(){
        const changeTextHandler=(e)=>{
            this.setState({
                text:e.target.value
            })
        }
        return(
            <Col md={12} className="mt-2 d-flex justify-content-around">
                <Col md={8}>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Введите текст" onChange={changeTextHandler}/>
                        </Form.Group>

                        <Button variant="info" onClick={()=>{this.props.sendMessage(this.props.match.params.chatId,this.state.text,"User")}}>Отправить сообщение</Button>
                    </Form>
                </Col>
                <Col className="text-center m-auto" md={4}>
                    <Button variant="danger" onClick={this.props.clear}>Очистить чаты</Button>
                </Col>
            </Col>
        )
    }
}

const mapStateToProps=({messagesReducer})=>({
    messages:messagesReducer.chats
})

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage,clear},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Footer) 
