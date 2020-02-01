import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { bindActionCreators } from 'redux';

class Ava extends Component {
  render() {
    return (
        <div>
        <Avatar style={{textAlign: "center", margin: 0 + " auto"}} alt="Remy Sharp" src={ this.props.ava } />
    </div>
    )
  }
}


let mapStateToProps = ({ chatReducer }) => ({
    ava: chatReducer.ava
})

let mapDispatchToProps = dispatch => bindActionCreators ({  }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Ava)