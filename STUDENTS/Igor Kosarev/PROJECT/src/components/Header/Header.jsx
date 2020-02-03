import React from 'react';
import PropTypes from "prop-types";
import PushToggle from '../PushToggle/index.jsx';
import './style.css';


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
                <PushToggle />
                <h1>Telesramm</h1>
                <h2>Чат { this.props.chatId }</h2>
            </div>
        )
    }
}