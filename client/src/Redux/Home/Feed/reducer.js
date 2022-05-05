import {FEEDDATA, FEEDUSER} from './actionTypes'

const init = {
    feedData : [],
    feeduser : ""
}

export const feedReducer = (state=init, {type, payload}) => {
    switch(type) {
        case FEEDDATA:
            return {
                ...state,
                feedData: [...payload]
            }
        case FEEDUSER:
            return {
                ...state,
                feeduser : payload
            }
        default :
                return state
    }
}