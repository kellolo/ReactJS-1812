// import './style.css'

import styles from './style.css' 
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody

    return (
        <div className="message"
        //style=  {messageStyle}
        style={ { textAlign: props.msg.usrName === 'You' ?
                   'right' : 'left' , 
                   backgroundColor: props.msg.usrName === 'You' ?
                   'lightgreen' : 'lightblue'} }
        >
            <div className="sender-name">{ senderName }</div>
            <div>{ text }</div>
        </div>
    )
}

export default msg