import React from 'react';
import PropTypes from "prop-types";


export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    }
 
    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div className="header">
                <h1>WhatsAcct</h1>
                <h2>Чат { this.props.chatId }</h2>
            </div>
        )
    }
}