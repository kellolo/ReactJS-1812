import './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message.jsx'
import { TextField } from 'material-ui';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { sendMessage } from '../../actions/message_actions.js'


class Messages extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };   

    state = {
        input: ''
    }

    // componentDidUpdate () {
    //     let msgs = this.state.messages
    //     if (msgs.length % 2 === 1) {
    //         setTimeout (() => {
    //             this.setState (
    //                 {
    //                     messages: [...this.state.messages, {body: 'Ваш звонок очень важен для нас', author: 'mr. Robo'}]
    //                 }
    //             )
    //         }, 1000)
    //     }
    // }

    textInput = React.createRef();

    // sendMessage = () => {
    //     this.setState ({
    //         messages: [...this.state.messages, {body: this.state.input}],
    //         input: ''
    //     })
    // }

    sendMessage = (msg, sender) => {
        let { chatId, messages } = this.props
        let messageId = Object.keys(messages).length + 1
        this.props.sendMessage (messageId, msg, sender, chatId)
    }

    handleSendMessage = (msg, sender) => {
        if (msg.length || sender === 'bot') {
            this.sendMessage (msg, sender)
        }
        if (sender === 'You') {
            this.setState ({ input: '' })
        }
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value })
    }

    handleKeyUp = (e, msg) => {
        if (e.keyCode === 13) {  // Enter
            this.handleSendMessage(msg, 'You')
        }
    }

    render () {
        let { chatId, chats, messages } = this.props

        let messageElements = chats[chatId].messageList.map (messageId => (
            <Message
                key = { messageId }                         
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
        return [
                <div key='message-field' className="message-field" >
                    { messageElements }
                </div>,
                <div keys='text-field' style={ { width: '100%', display: 'flex' } }>
                    <TextField 
                    name="input"
                    hintText="Enter your message"
                    style={ { fontSize: '22px' } }
                    value={ this.state.input }
                    onChange={ this.handleChange }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }/>
                    <FloatingActionButton onClick = { () => this.handleSendMessage(this.state.input, 'You') }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
        ]       
    }
}

let mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages
 });
 
let mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps) (Messages);
 