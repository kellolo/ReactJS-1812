import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import AddIcon from 'material-ui/svg-icons/content/add'
import { TextField } from 'material-ui'
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";

//store
import { addChat } from '../../actions/chat_actions.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

class ChatList extends React.Component {
    state = {
        input: '',
    }

    static propTypes = {
        push: PropTypes.func.isRequired,
    };
 
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
            <Link to = { `/chat/${ chatId }` } key = { chatId }>
                <ListItem primaryText = { chats[chatId].title } leftIcon={<ContentSend />} />
            </Link>
        ))

        return (
            <List>
                { chatsArr }
                <ListItem
                   key="Add new chat"
                   leftIcon={ <AddIcon /> }
                   onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
                   style={ { height: '60px' } }
                   children= {<TextField
                       key="textField"
                       fullWidth
                       name="input"
                       hintText="Добавить новый чат"
                       onChange={ this.handleChange }
                       value={ this.state.input }
                       onKeyUp={ this.handleKeyUp }
                   />}
               />
            </List>
        )
    }
}

let mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
})

let mapDispatchToProps = dispatch => bindActionCreators ({ addChat, push }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (ChatList)