import React from 'react'

import Button from 'react-bootstrap/Button'

import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {addChat} from '../../actions/addChat'
import Spinner from 'react-bootstrap/Spinner'



import './chat-list.css'

class ChatList extends React.Component{
    handleNavigate = (link) => {
        this.props.push(link);
        
    };
    render(){
        const Data = () =>{if(this.props.state.messagesReducer.isLoading !== true ){

            if(this.props.state.messagesReducer.deleted !==true){

            let listOfChats= Object.keys(this.props.state.messagesReducer.chats).map((key)=>{
               return(
                    <p className="chat p-2"style={{fontSize:"2rem"}}  key={key} onClick={()=>this.handleNavigate(`/chats/${key}`)} >
                        {this.props.state.messagesReducer.chats[key].chatName}
                    </p>
               )
            })
            return(
                <React.Fragment>
                    {listOfChats}
                </React.Fragment>
                    
            )
            }
            else{
                return(
                    <div>
                        Добавьте новый чат
                    </div>
                )    
            }
        }
        else{
            return(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }
        }
        return(
            <div className="col-md-12 col-lg-3 h-100 d-flex flex-column justify-content-around text-center">
                <h3>Ваши чаты</h3>
                <div className="d-flex h-75 flex-column justify-content-center align-items-center bg-warning text-white chat-list-container">
                    <Data/>
                </div>
                <Button variant="primary" onClick={this.props.addChat}>Добавить чат</Button>
            </div>
        )
    }
}

const mapStateToProps= (state)=>(
    {state}
)
const mapDispatchToProps = dispatch => bindActionCreators({push,addChat},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(ChatList)