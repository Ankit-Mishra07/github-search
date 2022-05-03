import { getLocal } from "../../utils/localstorage";
import { LOGINUSERS } from "./actionTypes";

const init = {
    Users : [],
    isloading:true,
    logged : getLocal()
}

const logReducer = (state=init, {type, payload}) => {
    switch(type) {
        case LOGINUSERS:
            return {
                Users:[...payload],
                isloading:false
            }
    }
}
