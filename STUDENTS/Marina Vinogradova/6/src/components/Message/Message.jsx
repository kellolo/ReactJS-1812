 import '../Message/style.css'

import React from 'react'


let msg = (props) => {
    let senderName = props.sender
    let text = props.text
    // let cloudColor = props.msg.clsName
    // let right = props.msg.ltr

    return (
        // <div className={ right }>
        // <div className={ cloudColor }>
        <div>
        <div>
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>
        </div>
    )
}

export default msg