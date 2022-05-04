import { LOGINUSERS } from "./actionTypes";
import {LOGGEDSUCCESS} from './actionTypes'
export const loginUsers = (users) => {
    return {
        type : LOGINUSERS,
        payload : users
    }
}

export const loggedSuccess = (user) => {
    return {
        type:LOGGEDSUCCESS,
        payload:user
    }
}