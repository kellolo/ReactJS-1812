import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    }
    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div className="header">
                <h1>Roskomgram</h1>
                <h2>Chat {this.props.chatId}</h2>
            </div>
        )
    }
}