import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { TextField } from '@material-ui/core'
import HeaderButton from '../HeaderButton/HeaderButton.jsx'
import './style.css'

import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { bindActionCreators } from 'redux';



class Header extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div>
                <header>
                <div className="head-chat-list">
                <div className="flex">
                <HeaderButton/>
                <TextField id="outlined-basic" variant="outlined" size="small" style={{margin: 5 + "px"}} />
                </div>
                {/* <div>
                <Avatar src={ this.props.ava } style={{alignSelf: "flex-end"}}/>
                </div> */}
                </div>
                </header>
            </div>
        )
    }
}


let mapStateToProps = ({ chatReducer }) => ({
    ava: chatReducer.ava
})

let mapDispatchToProps = dispatch => bindActionCreators ({  }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Header)