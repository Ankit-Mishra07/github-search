import {FEEDDATA} from './actionTypes'
import {FEEDUSER} from './actionTypes'

export const getfeedData = (data) => {
    return {
        type:FEEDDATA,
        payload : data
    }
}

export const getFeedUser = (user) => {
    return {
        type : FEEDUSER,
        payload : user
    }
}