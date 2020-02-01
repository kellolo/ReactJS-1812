import React from 'react'
import Button from 'react-bootstrap/Button'
import {bindActionCreators} from "redux";
import {clearAll} from '../../actions/clearAll'
import { connect } from 'react-redux';
class Clearer extends React.Component{
    
    onClearClick = (e)=>{
        e.preventDefault()
        localStorage.clear()
        this.props.clearAll()
    }
    render(){
        return(
            <React.Fragment>
                <Button variant="danger"className="mr-2 ml-2" onClick={this.onClearClick}>
                Очистить чат
                </Button>
                
            </React.Fragment>
            
        )
    }
}


const mapStateToProps=()=>{
    return ({})
}

const mapDispatchToProps = dispatch => bindActionCreators({clearAll},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Clearer)