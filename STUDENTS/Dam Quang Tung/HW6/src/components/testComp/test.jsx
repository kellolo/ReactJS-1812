import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Comp extends Component {
    constructor (props) {
        super (props)

        this.state = {
            counter: 1
        }
    }

    count = () => {
        console.log (this.state.counter)
        this.setState ({ counter: this.state.counter + 1 })
    }

    render () {
        let { counter } = this.state
        return (
            <div>
                <p>{ counter }</p>
                <button onClick={ this.count }>+1</button>
            </div>
        )
    }
}