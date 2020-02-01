import {RSAA, getJSON} from 'redux-api-middleware'



export const addMessage = (text,sender,ChatId)=>({
    type:"ADD_MSG",
    text,
    sender,
    ChatId
})


export const START_MESSAGE_LOADING = "START_MESSAGE_LOADING"
export const SUCCESS_MESSAGE_LOADING = "SUCCESS_MESSAGE_LOADING"
export const ERROR_MESSAGE_LOADING = "ERROR_MESSAGE_LOADING"

export const loadMessages = () =>({
    [RSAA]:{
        endpoint:'/Api/messages.json',
        method:"Get",
        types:[
            START_MESSAGE_LOADING,
            {
                type:SUCCESS_MESSAGE_LOADING,
                payload:(action,state,res)=>getJSON(res).then(
                    json=>json,
                ),
            },
            ERROR_MESSAGE_LOADING
        ]
    }
})