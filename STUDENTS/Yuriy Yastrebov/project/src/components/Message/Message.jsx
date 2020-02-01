import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };

    render () {
        return
            <div className="d-flex flex-column">
                <strong>{this.props.sender}</strong>
                <p>{this.props.text}</p>
            </div>
    }	
}
