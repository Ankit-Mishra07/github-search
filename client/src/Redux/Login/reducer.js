import { handleGetCookie, handleSetCookie } from "../../utils/cook";
import { LOGINUSERS } from "./actionTypes";
import {LOGGEDSUCCESS} from './actionTypes';
const init = {
    Users : [],
    isloading:true,
    loggedUser : handleGetCookie("gituser") || ""
}

export const logReducer = (state=init, {type, payload}) => {
    switch(type) {
        case LOGINUSERS:
            return {
                Users:[...payload],
                isloading:false,
                loggedUser:handleGetCookie("gituser") || ""
            }
        case LOGGEDSUCCESS:
            handleSetCookie("gituser",payload)
            return {
                ...state,
                loggedUser:handleGetCookie("gituser"),
            }
        default :
            return state
            
    }
}
