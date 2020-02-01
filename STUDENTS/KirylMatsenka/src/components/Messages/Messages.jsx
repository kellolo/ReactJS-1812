import React, {Component} from 'react'
import Message from '../Message/Message.jsx'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import ScrollBottom from './ScrollBottom.jsx'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { sendMessage } from '../../actions/message_actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messageInput: '',
            valid: true,
            scrollElement: null,
            messages: null
        }
    }

    async componentWillMount () {
        try {
            await fetch ('https://raw.githubusercontent.com/KirylJazzSax/api/master/messages.json')
            .then (data => data.json ())
            .then (json => {
                this.setState ({ messages: json })
            })
        } 
        finally {
            console.log ('Messages loaded')
        }
    }

    componentDidMount () {
        // Это поле диалога
        this.setState ({
            scrollElement: document.querySelector ('#messages'),
        })
    }

    componentDidUpdate () {
        // Scroll down automatically    
        if (this.getLastMessageInField ()) {
            this.getLastMessageInField ().scrollIntoView ({ behavior: 'smooth', block: 'center' })
        }
    }

    // Достаем последний элемент в диалоге
    getLastMessageInField () {
        let fieldElements = this.state.scrollElement.children
        return fieldElements[fieldElements.length - 2]   
    }

    handleFieldChange = e => {
        if (e.keyCode === 13) {
            this.sendMessage ()
            return 
        } 
        this.setState ({ messageInput: e.target.value })
    }

    sendMessage = () => {
        if (this.state.messageInput === '') {
            this.setState ({ valid: false })
            return 
        } 
        this.props.sendMessage (this.state.messageInput, this.props.user.name, this.props.chat)
        this.setState({ messageInput: '' })
    }

    render () {
        let messages
        if (this.state.messages !== null) {
            let m = this.state.messages[this.props.chat]
            messages = Object.keys (m).map (id => 
            <Box
                key={ id } 
                display="flex" 
                justifyContent={ m[id].user == this.props.user.name ? "flex-end" : "flex-start" }
                m={2}
            >
                <Message msg={ m[id] } user={ this.props.user }/>
            </Box>
            )
        }
        
    
        return (
            <Grid container item xs={9} alignContent={'flex-end'}>
                <Box 
                    id="messages" 
                    width={1} 
                    maxHeight={'calc(100vh - 140px)'} 
                    width="95%"
                    overflow="auto" 
                    alignSelf={'flex-end'}
                >
                    { messages }
                    <ScrollBottom scrollElement={this.state.scrollElement}>
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowDownIcon />
                        </Fab>
                    </ScrollBottom>
                </Box>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item xs={10}>
                        <TextField
                            id="message-input"
                            label={`Type message ${this.props.user.name}`}
                            variant="outlined"
                            color="primary"
                            onChange={ this.handleFieldChange }
                            onKeyUp={ this.handleFieldChange }
                            value={ this.state.messageInput }
                            error={ !this.state.valid }
                            helperText = { !this.state.valid ? 'You can\'t leave it like that' : '' }
                            fullWidth                        
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Fab color="primary" onClick={ this.sendMessage }>
                            <SendIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

let mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    user: chatReducer.user,
    messages: messageReducer.messages
})

let mapDispatchToProps = dispatch => bindActionCreators ({ sendMessage }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Messages)