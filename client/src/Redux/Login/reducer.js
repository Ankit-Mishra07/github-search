import { handleGetCookie, handleSetCookie } from "../../utils/cook";
import { getLocal, setLocal } from "../../utils/localstorage";
import { LOGINUSERS } from "./actionTypes";
import {LOGGEDSUCCESS} from './actionTypes';
const init = {
    Users : [],
    isloading:true,
    loggedUser : handleGetCookie("gitUser") || ""
}

export const logReducer = (state=init, {type, payload}) => {
    switch(type) {
        case LOGINUSERS:
            return {
                Users:[...payload],
                isloading:false
            }
        case LOGGEDSUCCESS:
            return {
                loggedUser:handleSetCookie(payload)
            }
        default :
            return state
            
    }
}
