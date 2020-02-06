import React from 'react'
import { makeStyles } from '@material-ui/core'

let Styles = makeStyles (theme => ({
    root: { 
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '60%',
        background: props =>
        props.user && props.msg.user == props.user.name 
        ? theme.palette.primary.main
        : theme.palette.warning.light,
        color: props =>
        props.user && props.msg.user == props.user.name
        ? theme.palette.primary.contrastText
        : theme.palette.warning.contrastText,
        columnGap: theme.spacing(2),
        padding: theme.spacing(1)
     },
     userMessage: {
        alignSelf: props => 
        props.user && props.msg.user == props.user.name
        ? 'flex-end'
        : 'flex-start', 
        '&:first-child': {
            fontSize: '0.7em'
        }
     }
})) 

export default Styles