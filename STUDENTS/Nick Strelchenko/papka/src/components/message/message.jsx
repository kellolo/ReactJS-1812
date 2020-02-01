import React from 'react'

import { connect } from 'react-redux';






class Message extends React.Component{
    
    render(){
        
        const { chatId }=this.props
        const {chats}=this.props.state.chatReducer
        
        const listOfMessages = chats[chatId].messageList.map((message)=>{
            const {text,sender}=message
            if (sender==="Robot"){
                return(
                    
                    <div className="d-flex justify-content-end m-3 text-white">
                        
                        <div className='w-25 bg-info'style={{borderRadius:"10px",}}>
                                <h4 style={{borderBottom:"1px dotted white"}}>{sender}</h4>
                                <p>{text}</p>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    
                    <div className="d-flex justify-content-start m-3 text-white">
                        
                        <div className='w-25 bg-success'style={{borderRadius:"10px",}}>
                                <h4 style={{borderBottom:"1px dotted white"}}>{sender}</h4>
                                <p>{text}</p>
                        </div>
                    </div>    
                )
            }
        })
        return(
            <div>{listOfMessages}</div>
        )
    }
}
        

const mapStateToProps=(state)=>{
    return ({state})
}
export default connect(mapStateToProps)(Message)
