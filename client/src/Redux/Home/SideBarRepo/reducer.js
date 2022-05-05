import {REPO_USER, SIDE_REPOS} from './actionTypes'
import {handleGetCookie} from '../../../utils/cook'
const init = {
    repos : [],
    isLoading : true,
    repouser:handleGetCookie("gituser") 
}

export const repoReducer = (state=init, {type, payload}) => {
    switch(type) {
        case SIDE_REPOS :
            return {
                ...state,
                repos : [...payload],
                isLoading : false
            }
        case REPO_USER:
            return {
                ...state,
                repouser:payload
            }
        default : 
            return state
    }
}

