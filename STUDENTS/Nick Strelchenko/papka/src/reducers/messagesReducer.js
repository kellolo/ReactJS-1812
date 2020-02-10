import {
    START_LOAD,
    ERROR_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    LOADED_CHATS
} from "../actions/messages.js"
import {START_CHATS_LOADING} from '../actions/messages'
import {SEND_MESSAGE} from '../actions/sendMessage'
import {ADD_CHAT} from '../actions/addChat'
import {CLEAR} from '../actions/clear'



const initialState={
    chats:{},
    isLoading:false,
    deleted:false
}

function messagesReducer(state=initialState,action){
    switch(action.type){
        case START_CHATS_LOADING:{
            return Object.assign(
                {},state,{isLoading:true}
            )
        }
        
        case SUCCESS_CHATS_LOADING:{ 
            return state
        }

        case ERROR_CHATS_LOADING:{
            return Object.assign(
                {},state,{isLoading:false}
            )
        }
        case START_LOAD:{
            return Object.assign(
                {},state,{isLoading:true}
            )
        }
        case LOADED_CHATS:{
            return Object.assign(
                {},state,{chats:action.payload.chatlist,isLoading:false}
            )
        }
        case SEND_MESSAGE:{
            const {id,sender,text}=action
            const newIdOfMessage = Object.keys(state.chats[id].messages).length+1
            const addingInChats = state.chats
            addingInChats[id].messages[newIdOfMessage]={name:sender,text}
            return Object.assign(
                {},state,{chats:addingInChats}
            )
        }
        case ADD_CHAT:{
            let newChatsLength = Object.keys(state.chats).length+1
            let withAddedChat = state.chats
            withAddedChat[newChatsLength]={chatName:"chat " + newChatsLength,messages:{}}
            return Object.assign(
                {},state,{chats:withAddedChat,deleted:false}
            )
        }
        case CLEAR:{
            console.log("CLEAR")
            return Object.assign(
                {},state,{chats:{},deleted:true}
            )
        }
    default:
        return state
    }
}

export default messagesReducer

