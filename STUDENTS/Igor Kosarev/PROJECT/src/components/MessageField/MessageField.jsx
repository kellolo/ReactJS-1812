import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import { sendMessage } from '../../actions/message_actions.js';
import './style.css';

// 1) Callback + XMLHTTPRequest ()
// 2) Promise (XMLHTTPRequest (url, {}))
        // .then ((dataFromUrl === resp) => {parse})
        // .then ((parsedData) => {//do smth})
    // 2.5
    // fetch (url, {post//put...}) //вы получите дату (в любом формате)
    //    .then ((data from url) => data.json () /// data.blob () /// data.text()) //возвращает спарсенные данные
    //    .tehen (parsedData => {
            //do smth with parsed data
    // })
//  3)  async ... await


class MessageField extends React.Component {
    static propTypes = {
       chatId: PropTypes.number.isRequired,
       messages: PropTypes.object.isRequired,
       chats: PropTypes.object.isRequired,
       sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    componentDidMount () {
        let a
        let url = '/API/messages.json'
        // fetch ('https://jsonplaceholder.typicode.com/users')
        fetch (url)
            .then (d => d.json ())
            .then (data => {
                a = data
            })
            .finally (() => {
                console.log (a.length ? a : 'Не удалось получить данные')
            })
    }

    //  async componentDidMount () {
    //     await this.getData ()
    // }

    // getData = async () => {
    //     let a
    //     try {
    //         await fetch ('https://jsonplaceholder.typicode.com/users')
    //                 .then (d => d.json ())
    //                 .then (data => {
    //                     a = data
    //                 })
    //     }
    //     finally {
    //         console.log (a.length ? a : 'Не удалось получить данные')
    //     }
    // }

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

    render() {
        const { chatId, chats, messages } = this.props;
        console.log (messages)
        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        ));

        return [
            <div key='message-field' className="message-field">
                { messageElements }
            </div>,
            <div key='text-field' style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, 'it') }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        ]
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);