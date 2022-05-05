import {FEEDDATA} from './actionTypes'

const init = {
    feedData : []
}

export const feedReducer = (state=init, {type, payload}) => {
    switch(type) {
        case FEEDDATA:
            return {
                feedData: [...payload]
            }
        
            default :
                return state
    }
}