import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { TextField, Fab } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx'
import '../Messages/style.css'
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { sendMessage, loadMessages } from '../../actions/message_actions';

class Messages extends Component {
        static propTypes = {
            chatId: PropTypes.number.isRequired,
            messages: PropTypes.object.isRequired,
            chats: PropTypes.object.isRequired,
            sendMessage: PropTypes.func.isRequired,
            isLoading: PropTypes.bool.isRequired,
        };

    state = {
        input: '',
    };
  
    // componentDidMount() {
    //     this.props.loadMessages();
    // }

    componentDidMount() {
        this.props.loadMessages(); 

        fetch('https://raw.githubusercontent.com/Marinadka/ReactJS-1812/master/STUDENTS/Marina%20Vinogradova/static.json')
        .then(body => body.json())
        .then(json => {
            json.forEach(msg => {
                this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);
            })
        })
         
    }
 

    sendMessage = (message, sender) => {
        const { chatId, messages } = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.props.sendMessage(messageId, message, sender, chatId);
     };

     handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(message, 'it')
        }
    };

    handleSendMessage = (message, sender) => {
       if (message.length > 0 || sender === 'bot') {
           this.sendMessage(message, sender);
       }
       if (sender === 'it') {
           this.setState({ input: '' })
       }
    };

    render () {
        if (this.props.isLoading) {
            return <CircularProgress />
        }

        let { user } = this.props
        const { chatId, chats, messages } = this.props;
        console.log (messages)

        const messageElements = chats[chatId].messageList.map(messageId => (
        <Message 
        // msg={ {
        //     usrName: message.author ? message.author : user, 
        //     // строка ниже меняет класс у сообщения и стиль, если это робот
        //     clsName: message.author === 'mr. Robo'? 'bot-cloud-msg' : 'msg-cloud', 
        //     ltr: message.author === 'mr. Robo'? 'msg-right' : '', 
        //     rtl: message.author === 'It'? 'msg-left' : '', 
        //     msgBody: message.body
        // } }
        key={ messageId }
        text={ messages[messageId].text }
        sender={ messages[messageId].sender }
        />))

  
        return [
            <div className="text-field-full">
                <header>
                    <div className="msg-wrapper">   
                    <h2 className="msg-wrapper-head"> Student's chat #{ this.props.chatId }</h2>
                    </div>
                </header>
                
                <main>
                    <div className="chat-texts">{ messageElements }
                    </div>
                </main>


                <footer>
                    <div className="type-bottom">
                    <TextField 
                        autoFocus={true}
                        name="input"
                        ref = {this.textInput}
                        hinttext="Write here"
                        value={ this.state.input }
                        onChange={ this.handleChange }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                        style={{width: 100 + '%'}} />
                    <Fab  className="btn-send-msg" style={{width: 40 + 'px', height: 40 + 'px', color: 'white'}} onClick={ () => this.handleSendMessage(this.state.input, 'it') }>
                        <SendIcon />
                    </Fab> 
                    </div>
                </footer>
            </div>
        ]
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);