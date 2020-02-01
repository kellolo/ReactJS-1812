class Message extends React.Component{
    
    render(){
        console.log("this.props.state.chatReducer.chats---message",this.props.state.chatReducer.chats)
        console.log("this.props-message",this.props)
        console.log("this.props.state.chatReducer.chats[this.props.chatId]-message",this.props.state.chatReducer.chats[this.props.chatId])
        const currentChat = this.props.state.chatReducer.chats[this.props.chatId-0].messageList
        console.log("currentChat",currentChat)
        
        const ListOfMsg = ()=>{
            const lstofmsgs = currentChat.map((item)=>{
                
                if (item.sender==="Robot"){
                    return(
                        
                        <div className="d-flex justify-content-end m-3 text-white">
                            <div className='w-25 bg-info'style={{borderRadius:"10px",}}>
                                    <h4 style={{borderBottom:"1px dotted white"}}>{item.sender}</h4>
                                    <p>{item.text}</p>
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        
                        <div className="d-flex justify-content-start m-3 text-white">
                            <div className='w-25 bg-success'style={{borderRadius:"10px",}}>
                                    <h4 style={{borderBottom:"1px dotted white"}}>{item.sender}</h4>
                                    <p>{item.text}</p>
                            </div>
                        </div>    
                    )
                }
            })
               
            return lstofmsgs
        }
        return(
            <ListOfMsg className='123'/>
        )
    }
}
async function  funcas(){
    alert("ASYNC")
    return null
}