import {FEEDDATA} from './actionTypes'


export const getfeedData = (data) => {
    return {
        type:FEEDDATA,
        payload : data
    }
}
