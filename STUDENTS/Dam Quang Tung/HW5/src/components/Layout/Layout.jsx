import React from 'react'
import PropTypes from "prop-types";

import Header from '../Header/Header.jsx';
import MessageField from '../MessageField/MessageField.jsx'
import ChatList from '../ChatList/ChatList.jsx'

import './style.css';

//store
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    }
 
    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div className="d-flex justify-content-center w-100 layout">
                <Header chatId = { this.props.chatId } />
                <div className = "d-flex w-100 justify-content-center layout-left-side">
                    <div className = "pr-5 w-30">
                        <ChatList />
                    </div>
                    <div className = "pr-5 w-70 layout-right-side">
                        <MessageField chatId={ this.props.chatId } />
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = ({}) => ({})
//  let mapDispatchToProps = dispatch => bindActionCreators ({  }, dispatch)
export default connect (mapStateToProps) (Layout)