import React from 'react';
import PropTypes from 'prop-types';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import './style.css';

//redux
import { sendMessage } from '../../actions/messageActions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        messages: {
            1: { text: 'text', sender: 'bot' },
            2: { text: 'text', sender: 'bot' }
        },
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if(Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].sender === 'user') {
            setTimeout(() => 
                this.sendMessage('Не пристовай ко мне, Я робот!', 'bot'),
            1000);
        };
    };

    addChat = (title) => {
        const { chats } = this.state;
        const chatId = Object.keys(chats).length + 1;

        this.setState({
            chats: {...chats, [chatId]: {title: title, messageList: []}}
        })
    };

    sendMessage = (message, sender) => {
        const { messages, chats } = this.state;
        const { chatId } = this.props;
        const messageId = Object.keys(messages).length + 1;

        this.setState({
            messages: {...messages, [messageId]: {text: message, sender: sender}},
        });
        this.props.sendMessage(messageId, message, sender, chatId);
    };

    render() {
        return(
            <div className="layout">
                <Header chatId={ this.props.chatId } />
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField 
                            chatId={ this.props.chatId }
                            messages={ this.state.messages }
                            sendMessage={ this.sendMessage }
                        />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);