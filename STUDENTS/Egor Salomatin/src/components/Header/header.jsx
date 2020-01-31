import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Grid } from '@material-ui/core'
import Menu from './Menu/Menu.jsx'


let header = (props) => {
    return (
        <Grid item >
            <Menu />
        </Grid>
    )
}

export default header