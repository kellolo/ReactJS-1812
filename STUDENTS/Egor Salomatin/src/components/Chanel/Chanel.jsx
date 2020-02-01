import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'
import style from './style.css'

//store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

let Chanel = (props) => {

    const handleNavigate = (link) => {
        props.push(link)
    }

    let {title, descr, index} = props.chanel

    let { efIndex } = props

    let animate = false;

    if ((index == efIndex)) {
        animate = true;
    }

    return (
            <ListItem className={animate ? 'chanel ch-animated' : 'chanel'} onClick={() => handleNavigate(`/chat/${index}`)}>
                <ListItemAvatar>
                    <Avatar alt={title} src="https://via.placeholder.com/100" />
                </ListItemAvatar>
                <ListItemText textDecoration="none" primary={title} secondary={descr}/>
            </ListItem>
    )
}

let mapStateToProps = ({ animationReducer }) => ({
   efIndex : animationReducer.efIndex
})

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Chanel)