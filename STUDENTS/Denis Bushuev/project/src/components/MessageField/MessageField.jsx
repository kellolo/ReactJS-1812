import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import './style.css';

//redux
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

//api
import CircularProgress from 'material-ui/CircularProgress';
import { sendMessage } from '../../actions/messageActions';
import { loadChats } from '../../actions/chatActions';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    state = {
        input: ''
    };

    // randomBot() {
    //     if(this.state.messages.length < 4) {
    //         return "У меня пока мало диалогов, но думаю в скором времени это исправят =)";
    //     } else {
    //         let randBot = ["Ну что тебе еще надо?", "Знаешь, Я думаю, что WoW самая лучшая ммо =)", "Знаешь Я думаю не стоит писать белиберду =)", "Я смотрю ты хороший собеседник", "Ищешь баги? Я только за!", "Оставь обо мне отзыв =)"];
    //         return(randBot[Math.floor(Math.random() * randBot.length)]);
    //     }
    // }

    handleSendMessage = (message, sender) => {
        if(this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        };
        if(sender === 'user') {
            this.setState({ input: '' });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if(event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'user')
        }
    };

    componentDidMount() {
        this.props.loadChats();
    };

    render() {
        if(this.props.isLoading) {
            return <CircularProgress />
        };

        const { chatId, messages, chats } = this.props;
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message 
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        ));

        return <div className="message-head">
            <div key="messageElements" className="message-field">
                { messageElements }
            </div>
            <div key="textInput" className="allSend">
                <TextField
                    name="input"
                    fullWidth={ true } 
                    className="inputSend"
                    hintText="Введите сообщение"
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp } 
                />
                <FloatingActionButton 
                    className="btnSend"
                    onClick={ () => this.handleSendMessage(this.state.input, 'user') }>
                        <SendIcon />
                    </FloatingActionButton>
            </div>
        </div>
    }
};

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);