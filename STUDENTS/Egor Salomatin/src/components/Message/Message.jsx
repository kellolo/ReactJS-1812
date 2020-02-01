import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'
import Avatar from '@material-ui/core/Avatar';



let msg = (props) => {
    let {text, sender} = props.msg
    let authorNameClass = props.msg.sender === 'Robot' ? "message-robot" : "message-user"
    return (
        <div className={authorNameClass}>
            <Avatar alt={sender} src="https://via.placeholder.com/50"/>  
            <div className="msg">
                <strong className="msg-author">{ sender }</strong>
                <p className="msg-text">{ text }</p>
            </div>
        </div>
    )
}

export default msg