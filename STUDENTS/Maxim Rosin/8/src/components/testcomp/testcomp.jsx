import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Child extends Component {
    constructor (props) {
        super (props)

        this.state = {
            counter: 1,
            btnName: 'Like'
        }
    }

    handleClick = () => {
        // console.log ('+1')
        // this.state.counter++
        // console.log (this.state.counter)
        this.setState ({ counter: this.state.counter + 1 })
    }

    render () {
        let { str } = this.props
        let { counter, btnName } = this.state
        return (
            <div>
                <h1>{ str }</h1>
                <hr/>
                <p>{ counter }</p>
                <button onClick={ this.handleClick }>{ btnName }+1</button>
            </div>
        )
    }
}