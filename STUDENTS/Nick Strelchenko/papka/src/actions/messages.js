import {RSAA, getJSON} from 'redux-api-middleware'

export const START_CHATS_LOADING = "START_CHATS_LOADING"
export const SUCCESS_CHATS_LOADING = "SUCCESS_CHATS_LOADING"
export const ERROR_CHATS_LOADING = "ERROR_CHATS_LOADING"

export const START_LOAD = "START_LOAD"
export const LOADED_CHATS = "LOADED_CHATS"



export const loadChats = ()=>({
    [RSAA]:{
        endpoint:"http://myjson.com/s66rm",
        method:"GET",
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin":"no-cors" },
        types:[
            START_CHATS_LOADING,
            {
                type:SUCCESS_CHATS_LOADING,
            },
            ERROR_CHATS_LOADING
        ],
    }
})

export const startLoad=()=>({
    type: START_LOAD
})

export const loadedChats=(action)=>({
    type: LOADED_CHATS,
    payload:action
})