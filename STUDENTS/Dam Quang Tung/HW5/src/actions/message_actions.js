export let SEND_MESSAGE = '@@messages/SEND_MESSAGE'

export let sendMessage = (messageId, text, sender, chatId) => ({
  type: SEND_MESSAGE,
  messageId,
  text,
  sender,
  chatId
})