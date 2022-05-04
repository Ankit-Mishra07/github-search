import {CURRENT_USER_FOLLOWERS, CURRENT_USER_PROFILE_DATA} from './actionTypes'

const init = {
    user:{},
    followers:[]
}

export const curUserReducer = (state=init, {type, payload}) => {
    switch(type) {
        case CURRENT_USER_PROFILE_DATA:
            return {
                ...state,
                user:payload,
            }
        case CURRENT_USER_FOLLOWERS:
            return {
                ...state,
                followers : [...payload]
            }
        default :
            return state
    }
}
