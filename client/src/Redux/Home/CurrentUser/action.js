import {CURRENT_USER_FOLLOWERS, CURRENT_USER_PROFILE_DATA} from './actionTypes'


export const getCurrentuserData = (data) => {
    return {
        type : CURRENT_USER_PROFILE_DATA,
        payload : data
    }
}

export const getCurrentuserfollowers = (data) => {
    return {
        type : CURRENT_USER_FOLLOWERS,
        payload : data
    }
}