case SUCCESS_MESSAGE_LOADING:{
    let UpdatedState = {}
    console.log('action',action)
    action.payload.forEach(element => {
        console.log("Element in SUCCESS_MESSAGE_LOADING",element)
        const {ChatId,text,sender}=element
        const Updatedchats = state.chats
        const UpdatedState = state
        UpdatedState.chats[ChatId].messageList=[
            ...UpdatedState.chats[ChatId].messageList,{sender:sender,text:text,}
        ]
        
        
        return UpdatedState
        
    });
    console.log("1")
    UpdatedState.isLoading=false
    return Object.assign(
        {},state,UpdatedState
    )
}



case START_MESSAGE_LOADING:{
    return Object.assign(
        {},state,{isLoading:true}
    )
}

case SUCCESS_MESSAGE_LOADING:{
    let UpdatedState = {}
    console.log('action',action)
    action.payload.forEach(element => {
        console.log("Element in SUCCESS_MESSAGE_LOADING",element)
        const {ChatId,text,sender}=element
        const Updatedchats = state.chats
        const UpdatedState = state
        UpdatedState.chats[ChatId].messageList=[
            ...UpdatedState.chats[ChatId].messageList,{sender:sender,text:text,}
        ]
        
        
        return UpdatedState
        
    });
    console.log("1")
    UpdatedState.isLoading=false
    return Object.assign(
        {},state,UpdatedState
    )
}
case ERROR_MESSAGE_LOADING: {
    return Object.assign(
        {},state,{isLoading:false}
    )
}