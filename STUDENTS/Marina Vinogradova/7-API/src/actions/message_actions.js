import { RSAA, getJSON } from 'redux-api-middleware';

export let SEND_MESSAGE = '@@messages/SEND_MESSAGE'

export let sendMessage = (messageId, text, sender, chatId) => ({
    type: SEND_MESSAGE,
    messageId, text, sender, chatId
})

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export const loadMessages = () => ({
   [RSAA]: {
       endpoint: 'https://raw.githubusercontent.com/Marinadka/ReactJS-1812/master/STUDENTS/Marina%20Vinogradova/static.json',
       method: 'GET',
       types: [
           START_MESSAGES_LOADING,
           {
               type: SUCCESS_MESSAGES_LOADING,
               payload: (action, state, res) => getJSON(res)
               .then(
                   json => json,
               ),
           },
           ERROR_MESSAGES_LOADING,
       ],
   },
});