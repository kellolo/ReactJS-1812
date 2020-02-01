import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, TextField } from '@material-ui/core';
import '../chatList/style.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material/list'
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';


//store
import { addChat } from '../../actions/chat_actions.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

class ChatList extends Component {
    
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    }

    state = {
        input: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
 
    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();
        }
    }
 
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    }

    handleNavigate = (link) => {
        this.props.push(link);
    };

    render() {

        let { chats } = this.props
        let chatsArr = Object.keys(chats).map(chatId => (
            // <Link to = { `/chat/${ chatId }` } key = { chatId }>
                <ListItem  
                divider={true} 
                onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
                className="chat-item cursor">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={ chats[chatId].title } secondary="It was rainy last time"/>
                </ListItem>
            // {/* </Link> */}
        ))

        return (
            <div className="chat-list-full">
                
                <div className="chat-list">
                    <List >
                    { chatsArr }
                    <div className="type-bottom">
                            <ListItem 
                                alignItems="flex-start" 
                                className="cursor new-chat"
                                key="Add new chat"
                                onClick={ this.handleAddChat }
                                children= {<TextField
                                    className="mdc-text-field--with-leading-icon"
                                    key="textField"
                                    fullWidth = {true}
                                    name="input"
                                    label="Create a new chat"
                                    onChange={ this.handleChange }
                                    value={ this.state.input }
                                    onKeyUp={ this.handleKeyUp }
                                />}>

                            </ListItem>
                            </div> 
                    </ List>
                </div>
            </div>
        )
    }

}


let mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
})

let mapDispatchToProps = dispatch => bindActionCreators ({ addChat, push }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (ChatList)