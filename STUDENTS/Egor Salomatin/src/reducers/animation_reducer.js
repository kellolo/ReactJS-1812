import update from 'react-addons-update'
import { AN_CHANEL } from '../actions/animation_actions'

const initialStore = {
    efIndex: 0
}

export default function animationReducer(store = initialStore, action) {
    switch (action.type) {
        case AN_CHANEL: {
            return update(store, {
                efIndex: {$set: action.chanelIndex}
            });
        }
        default:
            return store;
    }
}