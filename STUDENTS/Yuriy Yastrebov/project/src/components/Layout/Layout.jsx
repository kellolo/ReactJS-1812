import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Messages from '../Messages/Messages.jsx'

import ChatList from '../ChatList/ChatList.jsx'

import Header from '../Header/Header.jsx'


import './style.css'

import {sendMessage} from '../../actions/message_actions.js'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'
class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
	sendMessage: PropTypes.func.isRequired,
    }

    static defaultProps = {
        chatId: 1,
    }

    state = {
        messages: {
            1: { text: 'text', sender: 'bot' },
            2: { text: 'text', sender: 'bot' }
        },
    }
    componentDidUpdate(prevProps, prevState) {
        let {messages} = this.state
        if(Object.keys(prevState.messages).length < Object.keys(messages).length &&
		Object.values(messages)[Object.values(messages).length - 1].sender === 'user') {
                setTimeout(() => 
                    this.sendMessage('Не приставай ко мне!', 'bot'),
                1000);
        };
    };
    addChat = (title) => {
        const {chats} = this.state
        const chatId = Object.keys(chats).length + 1

        this.setState({
            chats: {...chats, [chatId]: {title: title, messageList: []}}
        })
    }
    sendMessage = (message, sender) => {
	const {messages, chats} = this.state;
       const {chatId} = this.props
       const messageId = Object.keys(messages).length + 1
	this.setState({
            messages: {...messages, [messageId]: {text: message, sender: sender}},
        })
       this.props.sendMessage(messageId, message, sender, chatId)
    }
    render () {
        return (
            <div className="d-flex justify-content-center w-100 layout">
                <Header chatId = {this.props.chatId}/>
                <div className="d-flex justify-content-center w-100 layout-left-side">
                    <div className="pr-5 w-30">
                        <ChatList />
                    </div>
                    <div className="d-flex justify-content-center w-100 layout-right-side">
                        <Messages
                            chatId = {this.props.chatId}
                            messages={this.state.messages}
                            sendMessage={this.sendMessage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = ({chatReducer, messageReducer}) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages
})
let mapDispatchToProps = dispatch => bindActionCreators ({sendMessage}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Layout)