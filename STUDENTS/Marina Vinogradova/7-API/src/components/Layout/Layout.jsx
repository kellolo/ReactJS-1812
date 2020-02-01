  
import React, { Component }  from 'react';
import Header from '../Header/Header.jsx'
import PropTypes from 'prop-types';
import ChatList from '../chatList/chatList.jsx'
import Messages from '../Messages/Messages.jsx'
import './style.css'

//store
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendMessage } from "../../actions/message_actions";

let user = 'It'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
      //  sendMessage: PropTypes.func.isRequired,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    // state = {
    //     messages: {
    //         1: { text: "Привет!", sender: 'bot' },
    //         2: { text: "Здравствуйте!", sender: 'bot' },
    //     },
    // };
    
    // sendMessage = (message, sender) => {
    //     const { messages } = this.state;
    //     const { chatId } = this.props;
 
    //     const messageId = Object.keys(messages).length + 1;
    //     this.setState({
    //         messages: {...messages,
    //             [messageId]: {text: message, sender: sender}},
    //     });
    //     this.props.sendMessage(messageId, message, sender, chatId);
    // };

    
    render() {
        return (
            <div>
                <Header/>
                <main className="flex">
                    <ChatList/>
                    <Messages 
                        chatId={ this.props.chatId } 
                        user={ user }
                        // messages={ this.state.messages }
                        // sendMessage={ this.sendMessage }
                    />
                </main>
            </div>
        )
    }
 }
 
 //let mapStateToProps = ({}) => ({})
//  let mapDispatchToProps = dispatch => bindActionCreators ({  }, dispatch)
// export default connect (mapStateToProps) (Layout)


// const mapStateToProps = ({}) => ({});

// const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);