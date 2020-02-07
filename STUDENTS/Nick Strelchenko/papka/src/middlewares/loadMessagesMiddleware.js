import {startLoad,loadedChats,START_LOAD,LOADED_CHATS} from '../actions/messages.js'

const urlForGettingData = "https://api.myjson.com/bins/s66rm"
const getDataAsync = async (url) =>    {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Could not fetch ${url} ` + `,recieved ${res.status}`)
    }
    const body = await res.json()
    return body
     
}

export default store => next => (action) =>{
    switch(action.type){
        case START_LOAD:{
            const getData = async () =>{
                let answer = await getDataAsync(urlForGettingData)
                store.dispatch(loadedChats(answer))
            }
            getData()
        }   
    }
    return next(action)
}


    