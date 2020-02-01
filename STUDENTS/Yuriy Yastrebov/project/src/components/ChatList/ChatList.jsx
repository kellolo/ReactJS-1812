import React, {Component} from 'react'
import {push} from 'connected-react-router'
import {List, ListItem} from 'material-ui/List'

import {TextField} from 'material-ui'
import ContentSend from 'material-ui/svg-icons/content/send'
import PropTypes from 'prop-types'
import AddIcon from 'material-ui/svg-icons/content/add'
import './style.css'

import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'
import {addChat} from '../../actions/chat_actions.js'

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
        this.setState({ [event.target.name]: event.target.value })
    }
 
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleAddChat()
        }
    }
 
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input)
            this.setState({ input: '' })
        }
    }

    handleNavigate = (link) => {
        this.props.push(link)
    }

    render () {
    	let {chats} = this.props
        let chatsArr = Object.keys(chats).map(chatId => (
            <ListItem
                key = {chatId}
                primaryText = {chats[chatId].title}
                leftIcon = {<ContentSend />}
                onClick = {() => this.handleNavigate(`/chat/${chatId}`)}>
            </ListItem>
        ))
        return (
            <List>
                {chatsArr}
                <ListItem
                   key="Добавить новый чат"
                   leftIcon={<AddIcon />}
                   onClick={this.handleAddChat}
		   className="addChat"
                   children= {<TextField
                       key="textField"
                       fullWidth
                       name="input"
                       hintText="Добавить новый чат"
                       onChange={this.handleChange}
                       value={this.state.input}
                       onKeyUp={this.handleKeyUp}
                   />}
                />   
            </List>
        )
    }
}

let mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
})

let mapDispatchToProps = dispatch => bindActionCreators ({addChat, push}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (ChatList)