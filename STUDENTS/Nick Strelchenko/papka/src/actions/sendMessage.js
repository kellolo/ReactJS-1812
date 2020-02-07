export const SEND_MESSAGE = "SEND_MESSAGE"

export const sendMessage=(id,text,sender)=>({
    type: SEND_MESSAGE,
    id:id,
    text:text,
    sender:sender
})