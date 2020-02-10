import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chat from '../Chat/Chat.jsx'
import AddChat from '../Chat/AddChat.jsx'
import List from '@material-ui/core/List'
import { push } from 'connected-react-router'
import PropTypes from 'prop-types'


import { addChat, loadChats } from '../../actions/chat_actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class ChatList extends Component {
    constructor (props) {
        super (props)

        this.state = {
            chats: null
        }
    }
    static propTypes = {
        push: PropTypes.func.isRequired
    }    
 
    handleNavigate = link => {
        this.props.push (link)
    }

    addChat = () => {
        this.props.addChat ()
    }

    componentDidMount () {
        this.props.loadChats ()
    }

    render () {
        let chats = Object.keys (this.props.chats).map (id =>
            <Chat key = { id } primary = { this.props.chats[id].title } secondary = { 'Some text' } handleNavigate = { () => this.handleNavigate (`/chat/${id}`) } />
        )
        return (
            <Grid container item xs={3}>
            <List>
                <AddChat primary = 'Создать чат' secondary = 'Some text' addChat = { this.addChat } />
                { chats }
            </List>
        </Grid>
        )
    }
} 

let mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
})

let mapDispatchToProps = dispatch => bindActionCreators ({ addChat, loadChats, push }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (ChatList)