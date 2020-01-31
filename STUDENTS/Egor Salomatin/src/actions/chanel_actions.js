export let ADD_CHANEL = '@@chat/ADD_CHANEL'

export let addChanel = (title, descr) => ({
    type: ADD_CHANEL,
    title, descr
})