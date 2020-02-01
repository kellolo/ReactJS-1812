import {schema} from 'normalizr'

export let messages = new schema.Entity('messages')
export let chats = new schema.Entity('chats', {
    messageList: [messages],
})
