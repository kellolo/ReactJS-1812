  
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router.jsx'

//redux
import initStore, { history } from './store.js'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
   <Provider store = { initStore () }>
      <ConnectedRouter history={history}>
         <MuiThemeProvider>
            <Router />
         </MuiThemeProvider>
      </ConnectedRouter>
   </Provider>
   , document.getElementById('root'),
);










// import Messages from './components/Messages/Messages.jsx'
// import Child from './components/testcomp/testcomp.jsx'

// let user = 'It'

// ReactDOM.render (
//    <Messages user={ user }/>,
//    document.getElementById('root'),
// )

// ReactDOM.render (
//    <Child str="Hello component from props"/>,
//    document.getElementById('root'),
// )








// let msgs = ['Hello','How are you?']

// let Messages = (props) => {
//     let messages = props.ms.map(m => <p>{ m }</p>)
//     return (<div>
//     { messages }
//     </div>)
// }

// let handleClick = () => {
//     msgs.push('Norm')
//     ReactDom.render(
//         <App />,
//         document.querySelector('#root')
//     )
// }


// let App = () => 
// <div>
//     <h1>React chat</h1>
//     <Messages ms = { msgs } />
//     <button onClick= { handleClick }>Add</button>
// </div>

// ReactDom.render (
//     <App />,
//     document.querySelector('#root')
// )

//part 1
// const el = <h1 className="element">Some react here</h1>

// ReactDom.render(
//     el,
//     document.getElementById('app')
// )