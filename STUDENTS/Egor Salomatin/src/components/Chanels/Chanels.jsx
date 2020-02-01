import React, {Component} from 'react'
import List from '@material-ui/core/List'
import Chanel from '../Chanel/Chanel.jsx'
import style from './style.css'

//store
import { connect } from 'react-redux';

class Chanels extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let { chanels } = this.props

        let ChanelsList = [];

        for (let key in chanels) {
            ChanelsList.push(<Chanel key={key} chanel = {
                {
                    title: chanels[key].title,
                    descr: chanels[key].descr,
                    index: key
                }
            } />)
        } 

        return (
            <div className="chanels-wrap">
                <List>
                    { ChanelsList }
                </List>
            </div>
        )
    }
}

let mapStateToProps = ({ chanelsReducer }) => ({
    chanels: chanelsReducer.chanels
})

export default connect (mapStateToProps) (Chanels)