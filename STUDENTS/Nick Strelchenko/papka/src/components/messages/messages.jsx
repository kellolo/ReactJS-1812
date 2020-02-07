import React from 'react'
import './messages.css'
import { connect } from 'react-redux';
class Messages extends React.Component{
    
    render(){
            const currentChat = this.props.messages[this.props.match.params.chatId].messages
            const listOfMessagesInChat=Object.keys(currentChat).map((key)=>{
            if(currentChat[key].name==="Robot"){
                return(
                    <div key={key} className="d-flex flex-row justify-content-end mt-2">
                        <div className="col-4 bg-warning text-white message">
                            <h3 className="text-center">{currentChat[key].name}</h3>
                            <p>{currentChat[key].text}</p>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div key={key} className="d-flex flex-row justify-content-left mt-2">
                        <div className="col-4 bg-primary text-white message">
                            <h3 className="text-center">{currentChat[key].name}</h3>
                            <p className="text-container">{currentChat[key].text}</p>
                        </div>
                    </div>
                )
            }
        })
            return(
                <div
            className="messageslist mt-1 p-1"
            >
                {listOfMessagesInChat}
            </div>
            )
                

    }
}

const mapStateToProps=({messagesReducer})=>({
    messages:messagesReducer.chats
})
export default connect(mapStateToProps)(Messages) 