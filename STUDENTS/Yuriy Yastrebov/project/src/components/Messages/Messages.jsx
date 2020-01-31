import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {TextField, FloatingActionButton} from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
import './style.css'

//redux
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'
//API
import CircularProgress from 'material-ui/CircularProgress'
import {sendMessage, loadMessages} from '../../actions/message_actions.js'
import {loadChats} from '../../actions/chat_actions.js'

let usrName = 'Human'
let botName = 'Mr.Robo'

class Messages extends Component {
    textInput = React.createRef() // реализация фокуса на chatTextArea
    static propTypes = {
       chatId: PropTypes.number.isRequired,
       messages: PropTypes.object.isRequired,
       chats: PropTypes.object.isRequired,
       sendMessage: PropTypes.func.isRequired,
       isLoading: PropTypes.bool.isRequired,
    }
    state = {
        input: '',
    };

    componentDidMount () {
        this.props.loadChats()
        //this.textInput.current.focus()

        fetch('/API/messages.json')
        .then(body => body.json())
        .then(json => {
            json.forEach(msg => {
                this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId)
            })
        })
    }
    
    handleSendMessage = (message, sender) => {
       if (this.state.input.length > 0 || sender === 'bot') {
           this.props.sendMessage(message, sender)
       }
       if (sender === 'it') {
           this.setState({ input: '' })
       }
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'it')
        }
    }

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const {chatId, messages, chats} = this.props;
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                key={index}
                text={messages[messageId].text}
                sender={messages[messageId].sender}
            />
        ))
	
        return (
            <div className="chatBlock">
                <div className="chatTitle">
                  <h2 className="chatTitleName">Happy Chat</h2>
                </div>
                <div key="messageElements" className="chatBody">
                    {messageElements}
                </div>
                <div key="textInput" className="chatSendArea">
                    <TextField
                        name = "input"
                        fullWidth={true}
                        ref={this.textInput}
                        className="chatTextArea"
                        hintText="Enter your message"
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={this.handleKeyUp}
                    />
                    <FloatingActionButton
                        onClick={() => this.handleSendMessage(this.state.input, 'it')}>
                        <SendIcon className="sendIcon"/>
                    </FloatingActionButton>
                </div>
            </div>
    	)    
    }
}

let mapStateToProps = ({chatReducer, messageReducer}) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
})
let mapDispatchToProps = dispatch => bindActionCreators ({sendMessage, loadChats}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(Messages)