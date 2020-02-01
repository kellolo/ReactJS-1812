import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Messages from '../Messages/Messages.jsx'
import Header from '../Header/header.jsx'
import Chanels from '../Chanels/Chanels.jsx'
import Footer from '../Footer/footer.jsx'
import PropTypes from 'prop-types'

//store
import { sendMessage } from '../../actions/messages_actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

let user = 'It'

export default class Layout extends Component {
    
    constructor(props) {
        super(props)

    }

    render() {

        let { chatId } = this.props.match.params
        
        if (!chatId) {
            chatId = 1
        } else {
            chatId = parseInt(chatId)
        }
        
        return (
            <Grid container >
                <Grid item container xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={2}>
                    <Chanels/>
                </Grid>
                <Grid item xs={10}>
                    <Messages user={ user } chatId= {chatId}/>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        )
    }
}
