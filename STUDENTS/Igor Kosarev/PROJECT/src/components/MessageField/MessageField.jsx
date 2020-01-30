// import './style.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Message from '../Message/Message.jsx'

import { TextField, FloatingActionButton } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import SendIcon from 'material-ui/svg-icons/content/send';

//store
import { sendMessage } from '../../actions/message_actions.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Messages extends React.Component {
    
    constructor (props) {
        super (props)
        this.state = {

            input: ''
        }
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


    handleSendMessage = () => {
        let { chatId } = this.props
        if (this.state.input.length > 0) {
            this.props.sendMessage(Date.now(), this.state.input, "You", chatId);
            this.setState({ input: '' });
        }
    }

    // async function loadMessages() {
    //     let response = await fetch('api/messages.json')
    //     let body = await response.json()
    //     let messages = await body.messages
    //     return messages
    //   }
      

    componentDidMount() {

        fetch('/api/messages1.json')
        .then(body => body.json())
        //.then(body => console.log(body.messages[0]))
        .then(body =>{
            let messages = body.messages
            //Для теста
            console.log(messages) //показывает что api работает

            let id = 20
            let text = "Привет!"
            let sender = "Test"
            let chatId = 1
            this.props.sendMessage(id,text,sender, chatId) //показывает что эта функция работает
            body.messages.forEach(msg =>{
                this.props.sendMessage(msg.id, msg.text,msg.sender, msg.chatId) // Вот тут как раз и не работает: [Error] Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'value[k]')  update (index.js:98)  update (index.js:98)  update (index.js:98)  combination (redux.js:470)  dispatch (redux.js:223)  (anonymous function) (MessageField.jsx:129)  forEach  (anonymous function) (MessageField.jsx:128)  promiseReactionJob
            })

        })

     }
  
 

    // sendMessage = () => {
    //     this.setState ({
    //         messages: [...this.state.messages, {body: this.state.input}],
    //         input: ''
    //     })
    // }

    handleInput = (e) => {
        this.setState({ input: e.target.value })
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {  // Enter
            this.handleSendMessage()
        }
    }

    render () {

        let { user } = this.props
        //let { messages } = this.state
        let { chatId } = this.props
        let { chats } = this.props
        let { messages } = this.props
        let MessageArr = messages[chatId].messagesList.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            msgBody: message.body
        } }/>)
        
        //console.log(chats[chatId])

        return (

            <div className="msg-wrapper">
                <div>
                    { MessageArr }
                </div>
                <div style={ { width: '100%', display: 'flex' }}>
                   <TextField 
                        name = "input"
                        ref = {this.textInput}
                        fullWidth = {true}
                        style={ { fontSize: '22px' } }
                        hintText = "Enter message"
                        onChange = {this.handleInput}
                        value={this.state.input}
                        onKeyUp={ this.handleKeyUp }
                    /> 
                </div>
                
                <FloatingActionButton onClick={ () => this.handleSendMessage() }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        )
    }
}

let mapStateToProps = ({ messagesReducer }) => ({
    messages: messagesReducer.messages,
})

let mapDispatchToProps = dispatch => bindActionCreators ({ sendMessage }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Messages)