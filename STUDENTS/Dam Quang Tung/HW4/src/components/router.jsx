import React, {Component} from 'react'

import { Switch, Route } from 'react-router-dom'

import Layout from './Layout/Layout.jsx'



export default class Router extends Component { 
    render () {
        return (
            <Switch>
                <Route exact path = "/" component = { Layout } />
                <Route exact path = "/chat/1/" render = { 
                    () => <Layout chatId = { 1 }/>
                } />
                <Route exact path = "/chat/2/" render = { 
                    () => <Layout chatId = { 2 }/>
                } />
                <Route exact path = "/chat/3/" render = { 
                    () => <Layout chatId = { 3 }/>
                } />
                <Route exact path = "/chat/4/" render = { 
                    () => <Layout chatId = { 4 }/>
                } />
                <Route exact path = "/chat/5/" render = { 
                    () => <Layout chatId = { 5 }/>
                } />
                }
            </Switch>
        )
    }
 }