// import './style.css'

import React, {Component} from 'react'

let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        <div className="d-flex flex-column">
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>
    )
}

export default msg