import {RSAA, getJSON} from 'redux-api-middleware'
import {normalize} from 'normalizr'
import { chats,messages } from '../utils/schemas'

export const START_CHATS_LOADING = "START_CHATS_LOADING"
export const SUCCESS_CHATS_LOADING = "SUCCESS_CHATS_LOADING"
export const ERROR_CHATS_LOADING = "ERROR_CHATS_LOADING"


export const addChat = () =>({
    type:"ADD_CHAT",
})

export const loadChats = ()=>({
    [RSAA]:{
        endpoint:"/api/chats.json",
        method:"GET",
        types:[
            START_CHATS_LOADING,
            {
                type:SUCCESS_CHATS_LOADING,
                
                payload:(action,state,res)=>getJSON(res).then(
                    json => normalize(json,[chats]),
                ),
            },
            ERROR_CHATS_LOADING
        ],
    }
})