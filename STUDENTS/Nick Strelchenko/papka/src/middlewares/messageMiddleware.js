import {addMessage} from '../actions/addMessage.js'
export default store => next => (action) =>{
    switch(action.type){
        case "ADD_MSG":
            

            if (action.sender === "User"){
                
                setTimeout(()=> store.dispatch(addMessage("Привет я бот","Robot",[action.ChatId])),1000)
            }
    }
    return next(action)
    
}

