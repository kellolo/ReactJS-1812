import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './Layout/Layout.jsx'


export default class Router extends React.Component {
    render () {
        return (
            // <Provider store={store}>
                <Switch>
                    <Route exact path = '/' component = { Layout }/>
                    <Route exact path = '/chat/1/' render = { 
                        () => <Layout chatId = { 1 } />
                     }/>
                    <Route exact path = '/chat/2/' render = { 
                        () => <Layout chatId = { 2 } />
                     }/>
                    <Route exact path = '/chat/3/' render = { 
                        () => <Layout chatId = { 3 } />
                     }/>
                     <Route exact path = '/chat/4/' render = { 
                        () => <Layout chatId = { 4 } />
                     }/>
                     <Route exact path = '/chat/5/' render = { 
                        () => <Layout chatId = { 5 } />
                     }/>
                     <Route exact path = '/chat/6/' render = { 
                        () => <Layout chatId = { 6 } />
                     }/>
                    {/* <Route exact path = {`/chat/:chatId`} render = { 
                        () => <Layout chatId = { chatId } />
                     }/>     */}
                </Switch>
            //</Provider>
        )
    }
}